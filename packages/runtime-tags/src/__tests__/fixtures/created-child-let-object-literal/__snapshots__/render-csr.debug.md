# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<span>
  b
</span>
<p>
  b!
</p>
<button>
  log
</button>
```
## Change
```
INSERT: span, p, button
UPDATE: p::text " " => "b!"
UPDATE: span::text " " => "b"
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "b!"
```

# Update `{"show":true,"label":"c"}`
