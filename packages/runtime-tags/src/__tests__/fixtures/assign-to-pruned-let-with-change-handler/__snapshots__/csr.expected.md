# Render
```html
<button>
  Before
</button>
<div>
  0
</div>
```

# Mutations
```
INSERT button, div
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<div>
  1
</div>
```

# Mutations
```
REMOVE #text in button
INSERT button/#text
UPDATE div/#text "0" => "1"
```