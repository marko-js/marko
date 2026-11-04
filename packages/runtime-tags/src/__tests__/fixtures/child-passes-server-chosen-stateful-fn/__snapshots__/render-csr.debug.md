# Render `{"title":"a","upper":true}`
```html
<output>
  Ua0
</output>
<button>
  inc
</button>
```
## Console
```
LOG "run" "Ua0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<output>
  Ua1
</output>
<button>
  inc
</button>
```
## Change
```
REMOVE: output::text("Ua0")
INSERT: output::text("Ua1")
```
## Console
```
LOG "run" "Ua1"
```

# Update `{"title":"b","upper":true}`
```html
<output>
  Ub1
</output>
<button>
  inc
</button>
```
## Change
```
REMOVE: output::text("Ua1")
INSERT: output::text("Ub1")
```
## Console
```
LOG "run" "Ub1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<output>
  Ub2
</output>
<button>
  inc
</button>
```
## Change
```
REMOVE: output::text("Ub1")
INSERT: output::text("Ub2")
```
## Console
```
LOG "run" "Ub2"
```

# Update `{"title":"b","upper":false}`
```html
<output>
  lb
</output>
<button>
  inc
</button>
```
## Change
```
REMOVE: output::text("Ub2")
INSERT: output::text("lb")
```
## Console
```
LOG "run" "lb"
```

# Update `{"title":"c","upper":false}`
```html
<output>
  lc
</output>
<button>
  inc
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
