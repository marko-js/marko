# Render
```html
<button>
  inc
</button>
LOADING...
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
REMOVE: ::text("LOADING...")
INSERT: button + ::text("0")
```

# Update
```js
container.querySelector("button").click();
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
UPDATE: ::text "0" => "1"
```

# Update
```js
container.querySelector("button").click();
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
UPDATE: ::text "1" => "2"
```
