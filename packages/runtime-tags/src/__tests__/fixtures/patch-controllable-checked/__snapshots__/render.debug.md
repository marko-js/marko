# Render `{"title":"Store","agree":false}`
```html
<main>
  <h1>
    Store
  </h1>
  <input
    type="checkbox"
  />
</main>
```

# Update `{"title":"Store!","agree":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <input
    checked=""
    type="checkbox"
  />
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
```

# Update
```js
document.querySelector("input").click();
```
```html
<main
  data-agree="false"
>
  <h1>
    Store!
  </h1>
  <input
    checked=""
    type="checkbox"
  />
</main>
```
## Change
```
UPDATE: main[data-agree] null => "false"
```
