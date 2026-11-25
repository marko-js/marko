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

# Update
```js
document.querySelector("#load").click();
```

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
REMOVE: ::text("0")
REMOVE: ::text("value ")
REMOVE: div
INSERT: ::text("LOADING")
```

# Update
```js
document.querySelector("#inc").click();
```

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
REMOVE: ::text("LOADING")
INSERT: div, ::text("value "), ::text("1")
```
## Console
```
LOG "script n=1 connected=true"
```
