# Render `{"$global":{"flag":true}}`
```html
<button />
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
ERROR "`$global.flag` is not serialized to the client, so this read is `undefined`. Add `flag` to `serializedGlobals` at the render call."
```
