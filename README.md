Expo router causes the React Native Debugger to not show source files

With this project as-is, you'll observe that this project's entrypoint is not handled by expo-router, and the react-native debugger works perfectly fine- allowing you to access and set breakpoints on source files.

However, if you were enable the expo-router entrypoint by switching to the value assigned to `main` in `package.json` from `index.ts` to `expo-router/entry`, you'll observe that the React Native Debugger does not show source files at all, which does not let me debug my application

There are exceptions to this issue, I will note, caused by altering a file in your IDE while the debugger is active, which will *sometimes* cause that altered file to show up in the debugger, and will *sometimes* show up in the debugger.

There was a case once where all my source files showed up for some reason, but that only happened once and I could not figure out why.

UPDATE
This is due to a conflict in the DevTools/React Native Debugger config, where it ignores the node_modules folder by default. The expo docs have been updated to acknowledge this issue.

