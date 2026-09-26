# Render
```html
<button>
  next
</button>
ready
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  next
</button>
LOADING
```
## Change
```
INSERT: button + ::text("LOADING")
REMOVE: ::text + ::text("ready")
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  next
</button>
tab 2
```
## Change
```
INSERT: button + ::text("tab 2")
REMOVE: ::text + ::text("LOADING")
```
