# Render `{"title":"Store","value":"first","big":false}`
```html
<main>
  <h1>
    Store
  </h1>
  <input
    value="first"
  />
</main>
```

# Update `{"title":"Store!","value":"second","big":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <input
    default-value="first"
    value="second"
  />
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
```

# Update
```js
const el = document.querySelector("input");
el.value = "hi";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```
```html
<main
  data-got="HI"
>
  <h1>
    Store!
  </h1>
  <input
    default-value="first"
    value="second"
  />
</main>
```
## Change
```
UPDATE: main[data-got] null => "HI"
```
