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
REMOVE: ::text("idle")
REMOVE: div
INSERT: ::text("LOADING")
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
REMOVE: ::text("LOADING")
INSERT: div
```
