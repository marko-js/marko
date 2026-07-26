# Render
```html
<button>
  toggle
</button>
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
  toggle
</button>
LOADING...
```
## Change
```
INSERT: button + ::text("LOADING...")
REMOVE: ::text + div
```

# Update
```html
<button>
  toggle
</button>
<div>
  settled
</div>
```
## Change
```
INSERT: button + div
REMOVE: div + ::text("LOADING...")
```
