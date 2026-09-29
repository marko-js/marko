# Render `{"title":"Store","show":false}`
```html
<main>
  <h1>
    Store
  </h1>
  <details>
    <summary>
      More
    </summary>
    <p>
      Body
    </p>
  </details>
</main>
```

# Update `{"title":"Store!","show":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <details
    open=""
  >
    <summary>
      More
    </summary>
    <p>
      Body
    </p>
  </details>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
UPDATE: main > details[open] null => ""
```

# Update
```js
document.querySelector("summary").click();
```
```html
<main
  data-open="false"
>
  <h1>
    Store!
  </h1>
  <details
    open=""
  >
    <summary>
      More
    </summary>
    <p>
      Body
    </p>
  </details>
</main>
```
## Change
```
UPDATE: main > details[open] "" => ""
UPDATE: main > details[open] null => ""
UPDATE: main[data-open] null => "false"
```
