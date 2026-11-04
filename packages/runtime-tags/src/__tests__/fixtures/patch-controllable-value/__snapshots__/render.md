# Render `{"title":"Store","value":"first"}`
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

# Update
```js
const el = document.querySelector("input");
el.value = "typing";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```

# Update `{"title":"Store!","value":"second"}`
```html
<main>
  <h1>
    Store!
  </h1>
  <input
    default-value="second"
    value="typing"
  />
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
UPDATE: main > input[value] "first" => "second"
```
