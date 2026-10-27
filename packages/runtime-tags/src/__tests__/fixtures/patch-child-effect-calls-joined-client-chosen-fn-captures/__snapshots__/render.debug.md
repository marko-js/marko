# Render `{"title":"a","other":"x"}`
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

# Update `{"title":"b","other":"x"}`
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
REMOVE: output::text("la")
INSERT: output::text("lb")
```
## Console
```
LOG "run" "lb"
```

# Update
```js
document.querySelector("button").click();
```
```html
<output>
  Ux
</output>
<button>
  toggle
</button>
```
## Change
```
REMOVE: output::text("lb")
INSERT: output::text("Ux")
```
## Console
```
LOG "run" "Ux"
```

# Update `{"title":"b","other":"y"}`
```html
<output>
  Uy
</output>
<button>
  toggle
</button>
```
## Change
```
REMOVE: output::text("Ux")
INSERT: output::text("Uy")
```
## Console
```
LOG "run" "Uy"
```

# Update `{"title":"c","other":"y"}`

# Update
```js
document.querySelector("button").click();
```
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
REMOVE: output::text("Uy")
INSERT: output::text("lc")
```
## Console
```
LOG "run" "lc"
```

# Update `{"title":"d","other":"z"}`
```html
<output>
  ld
</output>
<button>
  toggle
</button>
```
## Change
```
REMOVE: output::text("lc")
INSERT: output::text("ld")
```
## Console
```
LOG "run" "ld"
```
