# Render
```html
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  inc
</button>
C loading
```
## Change
```
INSERT: button + ::text("C loading ")
```

# Update
```html
<button>
  inc
</button>
B loading
```
## Change
```
INSERT: button + ::text("B loading ")
REMOVE: ::text + ::text("C loading ")
```

# Update
```html
<button>
  inc
</button>
A loading
```
## Change
```
INSERT: button + ::text("A loading")
REMOVE: ::text + ::text("B loading ")
```

# Update
```html
<button>
  inc
</button>
1
```
## Change
```
INSERT: button + ::text("1")
REMOVE: ::text + ::text("A loading")
```
