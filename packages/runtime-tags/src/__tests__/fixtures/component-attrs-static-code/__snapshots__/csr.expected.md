# Render
```html
<button>
  $0.00
</button>
<button>
  $0.00
</button>
```

# Mutations
```
INSERT button0, button1
```

# Render
```js
container.querySelectorAll("button").forEach(button => button.click());
```
```html
<button>
  $1.00
</button>
<button>
  $1.00
</button>
```

# Mutations
```
UPDATE button1/#text "$0.00" => "$1.00"
UPDATE button0/#text "$0.00" => "$1.00"
```