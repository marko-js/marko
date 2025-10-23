# Render
```html
<button />
<div>
  3
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
<button />
<div>
  6
</div>
```

# Mutations
```
UPDATE div/#text "3" => "6"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<div>
  10
</div>
```

# Mutations
```
UPDATE div/#text "6" => "10"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<div>
  15
</div>
```

# Mutations
```
UPDATE div/#text "10" => "15"
```