# Render `{"a":2}`

```html
<button>
  Increment
</button>
2 4
```

# Mutations
```
INSERT button, #text0, #text1, #text2
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Increment
</button>
2 5
```

# Mutations
```
UPDATE #text2 "4" => "5"
```

# Render `{"a":3}`

```html
<button>
  Increment
</button>
3 5
```

# Mutations
```
UPDATE #text0 "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Increment
</button>
3 6
```

# Mutations
```
UPDATE #text2 "5" => "6"
```