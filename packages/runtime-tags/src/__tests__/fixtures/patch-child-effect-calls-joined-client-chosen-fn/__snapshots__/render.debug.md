# Render `{"title":"a"}`
```html
<output>
  la
</output>
<button>
  toggle
</button>
```
## Console
```
LOG "run" "la"
```

# Update
```js
document.querySelector("button").click();
```
```html
<output>
  Ua
</output>
<button>
  toggle
</button>
```
## Change
```
REMOVE: output::text("la")
INSERT: output::text("Ua")
```
## Console
```
LOG "run" "Ua"
```

# Update `{"title":"b"}`
```html
<output>
  Ub
</output>
<button>
  toggle
</button>
```
## Change
```
REMOVE: output::text("Ua")
INSERT: output::text("Ub")
```
## Console
```
LOG "run" "Ub"
```

# Update
```js
document.querySelector("button").click();
```
```html
<output>
  lb
</output>
<button>
  toggle
</button>
```
## Change
```
REMOVE: output::text("Ub")
INSERT: output::text("lb")
```
## Console
```
LOG "run" "lb"
```

# Update `{"title":"c"}`
```html
<output>
  lc
</output>
<button>
  toggle
</button>
```
## Change
```
REMOVE: output::text("lb")
INSERT: output::text("lc")
```
## Console
```
LOG "run" "lc"
```

# Update `{"title":"c"}`
