# Render
```html
<button />
<div>
  Id is dynamic
</div>
<!---->
```

# Mutations
```
INSERT button, div, #comment
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<div
  id="dynamic"
/>
<!---->
```

# Mutations
```
INSERT div
REMOVE div after button
UPDATE div[id] null => "dynamic"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<div>
  Id is dynamic
</div>
<!---->
```

# Mutations
```
INSERT div
REMOVE div after button
UPDATE div/#text1 "" => "dynamic"
```