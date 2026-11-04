# Render `{"on":true,"show":true}`
```html
<button>
  add
</button>
<span>
  shown
</span>
<span>
  shown
</span>
<output>
  s:true
</output>
```
## Console
```
LOG "run" "s:true"
```

# Update `{"on":true,"show":false}`
```html
<button>
  add
</button>
<output>
  s:false
</output>
```
## Change
```
REMOVE: button + span
REMOVE: button + span
REMOVE: output::text("s:true")
INSERT: output::text("s:false")
```
## Console
```
LOG "run" "s:false"
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"on":true,"show":true}`
```html
<button>
  add
</button>
<span>
  shown
</span>
<span>
  shown
</span>
<span>
  shown
</span>
<output>
  s:true
</output>
```
## Change
```
INSERT: button + span
INSERT: span:nth-of-type(1) + span
INSERT: span:nth-of-type(2) + span
REMOVE: output::text("s:false")
INSERT: output::text("s:true")
```
## Console
```
LOG "run" "s:true"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  add
</button>
<span>
  shown
</span>
<span>
  shown
</span>
<span>
  shown
</span>
<span>
  shown
</span>
<output>
  s:true
</output>
```
## Change
```
INSERT: span:nth-of-type(3) + span
```
