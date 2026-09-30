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
ERROR "`$global.flag` is not serialized to the client, so this read is `undefined`. Serialized globals are embedded in the page: add `flag` to `serializedGlobals` at the render call only if it holds no secrets; otherwise copy the field the client needs into its own `$global` key and serialize that."
```
