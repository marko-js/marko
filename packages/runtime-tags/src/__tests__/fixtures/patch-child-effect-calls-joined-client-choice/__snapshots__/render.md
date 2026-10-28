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

# Update `{"title":"b"}`
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
  Ub
</output>
<button>
  toggle
</button>
```
## Change
```
REMOVE: output::text("lb")
INSERT: output::text("Ub")
```
## Console
```
LOG "run" "Ub"
```

# Update `{"title":"c"}`
```html
<output>
  Uc
</output>
<button>
  toggle
</button>
```
## Change
```
REMOVE: output::text("Ub")
INSERT: output::text("Uc")
```
## Console
```
LOG "run" "Uc"
```

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
REMOVE: output::text("Uc")
INSERT: output::text("lc")
```
## Console
```
LOG "run" "lc"
```

# Update `{"title":"d"}`
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
