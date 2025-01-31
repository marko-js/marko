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
  <span>
    The button was clicked 3 times.
  </span>
</div>
```

# Mutations
```
INSERT div/span
REMOVE button before div/span
UPDATE div/span/#text1 "" => "3"
```