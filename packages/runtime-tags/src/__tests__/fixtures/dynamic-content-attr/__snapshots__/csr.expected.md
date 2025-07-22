# Render
```html
<button>
  0 3
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
  1 3
</button>
```

# Mutations
```
UPDATE button/#text0 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2 3
</button>
```

# Mutations
```
UPDATE button/#text0 "1" => "2"
```