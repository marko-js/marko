# Render `{"a":"a0","show":true,"flag":false}`
```html
<u>
  B
</u>
<button>
  b
</button>
<output>
  s:true
</output>
```
## Console
```
LOG "run" "s:true"
```

# Update `{"a":"a1","show":false,"flag":true}`
```html
<u>
  A
</u>
<output>
  s:false
</output>
```
## Change
```
INSERT: u
REMOVE: u + u
REMOVE: u + button
REMOVE: output::text("s:true")
INSERT: output::text("s:false")
```
## Console
```
LOG "run" "s:false"
```

# Update `{"a":"a2","show":true,"flag":true}`
```html
<u>
  A
</u>
<button>
  a
</button>
<output>
  s:true
</output>
```
## Change
```
INSERT: u + button
REMOVE: output::text("s:false")
INSERT: output::text("s:true")
```
## Console
```
LOG "run" "s:true"
```
