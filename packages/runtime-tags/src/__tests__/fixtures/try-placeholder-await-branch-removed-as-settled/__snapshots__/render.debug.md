# Render
```html
<button>
  start
</button>
idle
<div>
  settled
</div>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  start
</button>
LOADING
```
## Change
```
INSERT: button + ::text("LOADING")
REMOVE: ::text + ::text("idle")
REMOVE: ::text + div
```

# Update
```html
<button>
  start
</button>
<div>
  settled
</div>
```
## Change
```
INSERT: button + div
REMOVE: div + ::text("LOADING")
```
