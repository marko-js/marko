# Render
```html
<button>
  inc
</button>
```

# Update
```html
<button>
  inc
</button>
inner loading
```
## Change
```
INSERT: button + ::text("inner loading")
```

# Update
```html
<button>
  inc
</button>
0
```
## Change
```
INSERT: button + ::text("0")
REMOVE: ::text + ::text("inner loading")
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
inner loading
```
## Change
```
INSERT: button + ::text("inner loading")
REMOVE: ::text + ::text("0")
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
REMOVE: ::text + ::text("inner loading")
```
