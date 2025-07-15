# Render
```html
= 0
<button>
  Inc
</button>
```

# Mutations
```
INSERT #text0, #text1, button
```

# Render
```js
container.querySelector("button").click();
```
```html
= 1
<button>
  Inc
</button>
```

# Mutations
```
UPDATE #text1 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
= 2
<button>
  Inc
</button>
```

# Mutations
```
UPDATE #text1 "1" => "2"
```