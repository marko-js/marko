# Render
```html
<button />
<div
  style="border:1px solid black"
>
  foo bar
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
<div
  style="border:1px solid black;display:none"
>
  foo bar
</div>
```

# Mutations
```
UPDATE div[style] "border:1px solid black" => "border: 1px solid black; display: none;"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<div
  style="border:1px solid black"
>
  foo bar
</div>
```

# Mutations
```
UPDATE div[style] "border: 1px solid black; display: none;" => "border: 1px solid black;"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<div
  style="border:1px solid black;display:none"
>
  foo bar
</div>
```

# Mutations
```
UPDATE div[style] "border: 1px solid black;" => "border: 1px solid black; display: none;"
```