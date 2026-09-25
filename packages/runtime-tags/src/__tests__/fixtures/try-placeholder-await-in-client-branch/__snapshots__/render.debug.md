# Render
```html
<button>
  show
</button>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  show
</button>
loading
```
## Change
```
INSERT: button + ::text("loading")
```

# Update
```html
<button>
  show
</button>
loaded
```
## Change
```
INSERT: button + ::text("loaded")
REMOVE: ::text + ::text("loading")
```
