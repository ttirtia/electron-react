## Electron - React

This sample project can serve as a template for building a React application with Electron.

The aim of this repository is to provide an extremely basic and simple structure with the bare minimal react modules.

## Quick start

Clone and run the dev script:

```sh
git clone https://github.com/ttirtia/electron-react
cd electron-react
yarn install
npm run dev
```

## Development setup

For development, babel-register is used to transpile the entrypoint at runtime. This lets you see any changes made after reloading the page.

```sh
npm run dev
```

## Production setup

You need to create a minified/uglified version of your app for production.

```sh
npm run build
```

Rollup will create a file app.min.js in the src folder. This file is imported in the index.html when we are not in a test environment.

You can also run your app in production mode.

```sh
npm run prod
```

## Packaging with Electron

There are 2 scripts for running electron-builder:

* For an expanded folder containing the binaries:

```sh
npm run dist
```

* For an installer targeting the current platform:

```sh
npm run pack
```
