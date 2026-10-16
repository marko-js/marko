# Render `{"$global":{"cspNonce":"default-nonce","serializedGlobals":{"cspNonce":true}}}`

# Update
## Change
```
INSERT: style
```

# Update
```js
const window = document.defaultView;
window.console.log(
  (window).ran,
  Array.from(document.querySelectorAll("style"), (style) => style.nonce),
);
```
## Console
```
LOG undefined [ 'default-nonce', 'override', 'override-spread', 'default-nonce' ]
```
