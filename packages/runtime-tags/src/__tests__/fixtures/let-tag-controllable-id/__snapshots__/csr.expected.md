# Render
```html
<button>
  1|1
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
  3|3
</button>
```

# Mutations
```
UPDATE button/#text0 "1" => "3"
UPDATE button/#text2 "1" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  5|5
</button>
```

# Mutations
```
UPDATE button/#text0 "3" => "5"
UPDATE button/#text2 "3" => "5"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  7|7
</button>
```

# Mutations
```
UPDATE button/#text0 "5" => "7"
UPDATE button/#text2 "5" => "7"
```