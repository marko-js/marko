---
"marko": patch
---

Include the lifecycle method, component type and instance ID in an error when a class component lifecycle hook (including `onInput` and `shouldUpdate`) throws in development, on the server or in the browser. Preserve the original thrown value as the error's cause without separately logging it; production behavior is unchanged.
