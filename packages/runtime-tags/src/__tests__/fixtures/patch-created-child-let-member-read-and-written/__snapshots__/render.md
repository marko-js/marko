# Render `{"show":false,"label":"a","n":1}`

# Update `{"show":true,"label":"b","n":2}`
```html
<p>
  b
</p>
<button>
  log
</button>
```
## Change
```
INSERT: p, button
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "b"
```
