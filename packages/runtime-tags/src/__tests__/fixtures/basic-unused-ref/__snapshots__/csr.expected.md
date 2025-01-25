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

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    2
  </button>
</div>
```

# Mutations
```
UPDATE div/button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    3
  </button>
</div>
```

# Mutations
```
UPDATE div/button/#text "2" => "3"
```