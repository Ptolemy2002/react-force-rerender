# React Force Rerender
The main purpose of this library is to provide access to a hook that returns a function that forces a rerender upon being called. It uses setTimeout as a method to bypass the "Cannot update a component while rendering a different component" error (seems to be the easiest solution found at [stackoverflow](https://stackoverflow.com/a/63659469/7369908)).

The hook is exported as default, so you can import in one of the following ways:
```javascript
// ES6
import useForceRerender from '@ptolemy2002/react-force-rerender';
// CommonJS
const useForceRerender = require('@ptolemy2002/react-force-rerender');
```

## Functions
The following functions are available in the library:

### useForceRerender
#### Description
This hook returns a function that forces a rerender upon being called. It uses setTimeout as a method to bypass the "Cannot update a component while rendering a different component" error.

#### Parameters
None

#### Returns
`() => void` - The function that forces a rerender.

## Peer Dependencies
- `react^18.3.1`
- `react-dom^18.3.1`

## Commands
The following commands exist in the project:

- `npm run build` - Builds the library
- `npm run dev` - Starts the development server
- `npm run lint` - Lints the project
- `npm run uninstall` - Uninstalls all dependencies for the library and clears the cache
- `npm run reinstall` - Uninstalls, clears the cache, and then reinstalls all dependencies for the library
- `npm run release` - Publishes the library to npm without changing the version
- `npm run release-patch` - Publishes the library to npm with a patch version bump
- `npm run release-minor` - Publishes the library to npm with a minor version bump
- `npm run release-major` - Publishes the library to npm with a major version bump