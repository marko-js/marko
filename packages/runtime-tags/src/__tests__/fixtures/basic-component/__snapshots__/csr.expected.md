# Render
```html
<div>
  <button>
    0
  </button>
</div>
```

# Mutations
```
INSERT div
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    1
  </button>
</div>
```

# Mutations
```
UPDATE div/button/#text "0" => "1"
```