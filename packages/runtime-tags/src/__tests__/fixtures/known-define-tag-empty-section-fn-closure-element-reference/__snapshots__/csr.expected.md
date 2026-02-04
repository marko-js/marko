# Render
```html
<div />
<button />
<!---->
```

# Mutations
```
INSERT div, button, #text, #comment
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  [onClick(hello)]
</div>
<button />
<!---->
```

# Mutations
```
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  [onClick(hello)][onClick(hello)]
</div>
<button />
<!---->
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  [onClick(hello)][onClick(hello)][onClick(hello)]
</div>
<button />
<!---->
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```