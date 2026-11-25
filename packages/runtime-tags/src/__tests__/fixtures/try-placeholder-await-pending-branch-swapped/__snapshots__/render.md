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
REMOVE: ::text("ready")
INSERT: ::text("LOADING")
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
REMOVE: ::text("LOADING")
INSERT: ::text("tab 2")
```
