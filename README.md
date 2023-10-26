# CruzHacks 2024 Monorepo

The idea with this repo was to ease development of Firebase functions (assuming we may need an api endpoint or two down the road) and the two React frontends by sharing configs, formatting, linting rules, types, and components. I used turborepo for this but have encountered some frustrating issues.

Some super nifty commands are already working, like `yarn start` at the repo root will start all servers and firebase emulators making it easy to test the whole system. Additionally, `yarn deploy` is working great.

## TODO

However I encountered a number of problems to fix:
- [ ] Vite build failing with functions app, might be best to remove vite and just tsc compile
- [ ] eslint shared config not working with desired .eslintrc; had to make individuals lint configs rather than a shared (For some reason [this guide](https://turbo.build/repo/docs/handbook/linting/eslint) doesn't work.

And a bit of a todo list:
- [ ] Make shared UI package
- [ ] Setub Github Actions for CI/CD
  - [ ] Preview Deploys for PRs
  - [ ] Staging on Cruzhacks-2024-Development Firebase project
  - [ ] Production on Cruzhacks prod Firebase project


```
├── apps
│   ├── functions # firebase function that is typescript and loaded as ESM and deployed as a firebase function
│   ├── main-site # the react+tailwind+vite front end deployed to firebase hosting
|   └── live-site # the react+tailwind+vite front end deployed to firebase hosting
├── packges
|   ├── eslint shared config
|   ├── tailwind shared config
|   ├── tsconfig shared
|   ├── UI library of react components shared between main site and live-site
|   └── shared util functions
```

# Current Working Commands

```
# install the deps
yarn install

# to develop
yarn start

# to deploy
yarn run deploy
```
