# Render
```html
<button>
  Click initial
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
  Click updated
</button>
```

# Mutations
```
UPDATE button/#text1 "initial" => "updated"
```