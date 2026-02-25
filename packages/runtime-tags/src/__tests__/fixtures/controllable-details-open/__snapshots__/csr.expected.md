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
const details = container.querySelector("details");
details.open = !details.open;
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
const details = container.querySelector("details");
details.open = !details.open;
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
const details = container.querySelector("details");
details.open = !details.open;
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