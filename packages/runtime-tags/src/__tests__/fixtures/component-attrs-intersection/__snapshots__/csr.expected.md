# Render
```html
<div>
  0
</div>
<button />
```

# Mutations
```
INSERT div, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  1
</div>
<button />
```

# Mutations
```
UPDATE div/#text "0" => "1"
```