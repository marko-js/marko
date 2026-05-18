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
LOADING...
```
## Change
```
INSERT: button + ::text("LOADING...")
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
REMOVE: ::text + ::text("LOADING...")
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
0
```

# Update
```html
<button>
  inc
</button>
LOADING...
```
## Change
```
INSERT: button + ::text("LOADING...")
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
REMOVE: ::text + ::text("LOADING...")
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
1
```

# Update
```html
<button>
  inc
</button>
LOADING...
```
## Change
```
INSERT: button + ::text("LOADING...")
REMOVE: ::text + ::text("1")
```

# Update
```html
<button>
  inc
</button>
2
```
## Change
```
INSERT: button + ::text("2")
REMOVE: ::text + ::text("LOADING...")
```
