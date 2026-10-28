# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button
  class="set"
>
  set
</button>
<div>
  b
</div>
```
## Change
```
INSERT: .set, div
INSERT: div::text("b")
```

# Update
```js
document.querySelector("button.set").click();
```

# Update `{"show":true,"label":"c"}`
