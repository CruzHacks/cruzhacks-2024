import React, { useEffect, useState } from "react";
import { iLikeTurtles } from "@acme/shared";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/functions/test")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="font-bold">From apps/functions (@acme/functions)</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="font-bold">From packages/shared (@acme/shared)</p>
          <pre>{JSON.stringify(iLikeTurtles())}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
