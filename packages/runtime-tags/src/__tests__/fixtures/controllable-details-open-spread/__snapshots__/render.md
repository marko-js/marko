# Render
```html
<details>
  <summary>
    s
  </summary>
</details>
<span>
  false
</span>
```

# Update
```js
const details = container.querySelector("details");
details.open = !details.open;
```
```html
<details
  open=""
>
  <summary>
    s
  </summary>
</details>
<span>
  true
</span>
```
## Change
```
UPDATE: details[open] null => ""
UPDATE: details[open] "" => ""
UPDATE: details[open] null => ""
UPDATE: span::text "false" => "true"
```

# Update
```js
const details = container.querySelector("details");
details.open = !details.open;
```
```html
<details>
  <summary>
    s
  </summary>
</details>
<span>
  false
</span>
```
## Change
```
UPDATE: details[open] "" => null
UPDATE: details[open] null => null
UPDATE: details[open] "" => null
UPDATE: span::text "true" => "false"
```

# Update
```js
const details = container.querySelector("details");
details.open = !details.open;
```
```html
<details
  open=""
>
  <summary>
    s
  </summary>
</details>
<span>
  true
</span>
```
## Change
```
UPDATE: details[open] null => ""
UPDATE: details[open] "" => ""
UPDATE: details[open] null => ""
UPDATE: span::text "false" => "true"
```
