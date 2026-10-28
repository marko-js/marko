# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
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
UPDATE: p::text " " => "b"
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "b"
```
