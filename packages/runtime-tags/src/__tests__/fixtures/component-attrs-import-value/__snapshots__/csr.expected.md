# Render
```html
<button>
  $0.00
</button>
```

# Mutations
```
INSERT button
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  $1.00
</button>
```

# Mutations
```
UPDATE button/#text "$0.00" => "$1.00"
```