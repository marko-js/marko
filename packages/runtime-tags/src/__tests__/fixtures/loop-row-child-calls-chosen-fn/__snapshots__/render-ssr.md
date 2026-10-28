# Render `{"title":"a","items":[{"id":1,"upper":true},{"id":2,"upper":false}]}`
```html
<output>
  Ua
</output>
<output>
  la
</output>
<button>
  noop
</button>
```
## Console
```
LOG "run" "Ua"
LOG "run" "la"
```

# Update
```js
document.querySelector("button").click();
```
