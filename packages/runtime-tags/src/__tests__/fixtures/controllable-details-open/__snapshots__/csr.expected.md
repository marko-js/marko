# Render
```html
<details>
  <summary />
</details>
<span>
  false
</span>
```

# Mutations
```
INSERT details, span
```

# Render
```js
container.querySelector("summary").click();
await new Promise(r => setTimeout(r, 0));
```
```html
<details
  open=""
>
  <summary />
</details>
<span>
  true
</span>
```

# Mutations
```
UPDATE details[open] null => ""
UPDATE details[open] "" => ""
UPDATE details[open] null => ""
UPDATE span/#text "false" => "true"
```

# Render
```js
container.querySelector("summary").click();
await new Promise(r => setTimeout(r, 0));
```
```html
<details>
  <summary />
</details>
<span>
  false
</span>
```

# Mutations
```
UPDATE details[open] "" => null
UPDATE details[open] null => null
UPDATE details[open] "" => null
UPDATE span/#text "true" => "false"
```

# Render
```js
container.querySelector("summary").click();
await new Promise(r => setTimeout(r, 0));
```
```html
<details
  open=""
>
  <summary />
</details>
<span>
  true
</span>
```

# Mutations
```
UPDATE details[open] null => ""
UPDATE details[open] "" => ""
UPDATE details[open] null => ""
UPDATE span/#text "false" => "true"
```