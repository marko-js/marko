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
UPDATE: ::text " " => "0"
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
