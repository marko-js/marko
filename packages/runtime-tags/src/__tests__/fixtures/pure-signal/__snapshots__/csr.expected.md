# Render
```html
<button>
  0
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
  2
</button>
```

# Mutations
```
UPDATE button/#text "0" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
```

# Mutations
```
UPDATE button/#text "2" => "4"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  6
</button>
```

# Mutations
```
UPDATE button/#text "4" => "6"
```