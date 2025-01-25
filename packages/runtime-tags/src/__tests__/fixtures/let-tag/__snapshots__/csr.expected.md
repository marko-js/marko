# Render
```html
<button>
  1
</button>
1
```

# Mutations
```
INSERT button, #text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
2
```

# Mutations
```
UPDATE #text "1" => "2"
UPDATE button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
4
```

# Mutations
```
UPDATE #text "2" => "4"
UPDATE button/#text "2" => "4"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  8
</button>
8
```

# Mutations
```
UPDATE #text "4" => "8"
UPDATE button/#text "4" => "8"
```