# Render `{"title":"a"}`
```html
<output>
  la
</output>
<button>
  more
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
  more
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

# Update `{"title":"c"}`
```html
<output>
  lc
</output>
<button>
  more
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

# Update
```js
document.querySelector("button").click();
```

# Update `{"title":"d"}`
```html
<output>
  ld
</output>
<button>
  more
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
