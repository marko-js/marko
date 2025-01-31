# Render
```html
<!---->
Body Content
<button />
```

# Mutations
```
INSERT #comment, #text, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  Body Content
</div>
<button />
```

# Mutations
```
INSERT div
REMOVE #text after #comment
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
Body Content
<button />
```

# Mutations
```
INSERT #text
REMOVE div after #comment
```