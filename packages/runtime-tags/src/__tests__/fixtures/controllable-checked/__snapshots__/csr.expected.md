# Render
```html
<input
  type="checkbox"
/>
<span>
  false
</span>
```

# Mutations
```
INSERT input, span
```

# Render
```js
container.querySelector("input").click();
```
```html
<input
  checked=""
  type="checkbox"
/>
<span>
  true
</span>
```

# Mutations
```
UPDATE span/#text "false" => "true"
```

# Render
```js
container.querySelector("input").click();
```
```html
<input
  type="checkbox"
/>
<span>
  false
</span>
```

# Mutations
```
UPDATE span/#text "true" => "false"
```

# Render
```js
container.querySelector("input").click();
```
```html
<input
  checked=""
  type="checkbox"
/>
<span>
  true
</span>
```

# Mutations
```
UPDATE span/#text "false" => "true"
```