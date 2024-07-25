# React Library CRA Template
The main purpose of this library is to provide access to a hook that returns a function that forces a rerender upon being called. It uses setTimeout as a method to bypass the "Cannot update a component while rendering a different component" error (seems to be the easiest solution found at [stackoverflow](https://stackoverflow.com/a/63659469/7369908)).

The hook is exported as default, so you can import in one of the following ways:
```
// ES6
import useForceRerender from '@ptolemy2002/react-force-rerender';
// CommonJS
const useForceRerender = require('@ptolemy2002/react-force-rerender');
```

## Meta
This is a React Library Created by Ptolemy2002's [cra-template-react-library](https://www.npmjs.com/package/@ptolemy2002/cra-template-react-library) template in combination with [create-react-app](https://www.npmjs.com/package/create-react-app). It contains methods of building and publishing your library to npm.
For now, the library makes use of React 18 and does not use TypeScript.

## Commands
The following commands exist in the project:

- `npm run uninstall` - Uninstalls all dependencies for the library
- `npm run reinstall` - Uninstalls and then Reinstalls all dependencies for the library
- `npm run example-uninstall` - Uninstalls all dependencies for the example app
- `npm run example-install` - Installs all dependencies for the example app
- `npm run example-reinstall` - Uninstalls and then Reinstalls all dependencies for the example app
- `npm run example-start` - Starts the example app after building the library
- `npm run build` - Builds the library
- `npm run release` - Publishes the library to npm without changing the version
- `npm run release-patch` - Publishes the library to npm with a patch version bump
- `npm run release-minor` - Publishes the library to npm with a minor version bump
- `npm run release-major` - Publishes the library to npm with a major version bump