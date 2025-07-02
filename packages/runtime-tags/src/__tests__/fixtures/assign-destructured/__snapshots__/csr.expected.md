# Render
```html
<button>
  1:0
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
  1:1
</button>
```

# Mutations
```
UPDATE button/#text2 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  1:2
</button>
```

# Mutations
```
UPDATE button/#text2 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  1:3
</button>
```

# Mutations
```
UPDATE button/#text2 "2" => "3"
```