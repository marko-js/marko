# Render
```html
<button>
  0:0
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
UPDATE button/#text0 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2:2
</button>
```

# Mutations
```
UPDATE button/#text2 "1" => "2"
UPDATE button/#text0 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  3:3
</button>
```

# Mutations
```
UPDATE button/#text2 "2" => "3"
UPDATE button/#text0 "2" => "3"
```