import { logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import express from "express";
import { iLikeTurtles } from "@acme/shared";
import { faker } from "@faker-js/faker";

initializeApp();

const app = express();

app.get("*", (req, res) => {
  logger.log("Hello from logger");
  res.send({
    hello: "world",
    randomName: faker.person.firstName(),
    iLikeTurtles: iLikeTurtles(),
    nice: 69,
  });
});

app.post("/addName/:name", async (req, res) => {
  const name = req.params.name;
  logger.log(`Adding name '${name}' to database`);

  const writeResult = await getFirestore()
    .collection("names")
    .add({ name: name });

  res.json({ result: `Name with ID ${writeResult.id} added.` });
});

app.get("/getNames", async (req, res) => {
  const snapshot = await getFirestore().collection("names").get();
  return snapshot;
});

export const server = onRequest(app);
