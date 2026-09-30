# Render
```html
<button
  id="load"
>
  load
</button>
<button
  id="inc"
>
  inc
</button>
<div>
  n 0
</div>
value 0
```
## Console
```
LOG "script n=0 connected=true"
```

# Update `click("#load")`

# Update
```html
<button
  id="load"
>
  load
</button>
<button
  id="inc"
>
  inc
</button>
LOADING
```
## Change
```
INSERT: #inc + ::text("LOADING")
REMOVE: ::text + div
REMOVE: ::text + ::text("value ")
REMOVE: ::text + ::text("0")
```

# Update `click("#inc")`

# Update
```html
<button
  id="load"
>
  load
</button>
<button
  id="inc"
>
  inc
</button>
<div>
  n 1
</div>
value 1
```
## Change
```
INSERT: #inc + :is(div, ::text("value "), ::text("1"))
REMOVE: ::text@6 + ::text("LOADING")
```
## Console
```
LOG "script n=1 connected=true"
```
