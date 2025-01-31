# Render
```html
<!---->
<div>
  Child 1 has 3
</div>
<button />
```

# Mutations
```
INSERT #comment, div, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  Child 2 has 3
</div>
<button />
```

# Mutations
```
INSERT div
REMOVE div after #comment
UPDATE div/#text1 "" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  Child 1 has 3
</div>
<button />
```

# Mutations
```
INSERT div
REMOVE div after #comment
UPDATE div/#text1 "" => "3"
```