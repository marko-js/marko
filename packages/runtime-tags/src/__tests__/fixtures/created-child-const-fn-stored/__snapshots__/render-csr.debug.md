# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<output>
  f:b
</output>
<button>
  toggle
</button>
```
## Change
```
INSERT: output, button
INSERT: output::text("f:b")
```
## Console
```
LOG "run" "f:b"
```

# Update `{"show":true,"label":"c"}`
```html
<output>
  f:c
</output>
<button>
  toggle
</button>
```
## Change
```
REMOVE: output::text("f:b")
INSERT: output::text("f:c")
```
## Console
```
LOG "run" "f:c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<output>
  -
</output>
<button>
  toggle
</button>
```
## Change
```
REMOVE: output::text("f:c")
INSERT: output::text("-")
```
## Console
```
LOG "run" "-"
```

# Update `{"show":true,"label":"d"}`
