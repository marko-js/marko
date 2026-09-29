# Render `{"title":"Store","show":false,"value":"first"}`
```html
<main>
  <h1>
    Store
  </h1>
</main>
```

# Update `{"title":"Store!","show":true,"value":"second"}`
```html
<main>
  <h1>
    Store!
  </h1>
  <input
    value="second"
  />
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
INSERT: main > h1 + input
UPDATE: main > input[value] null => "second"
```

# Update
```js
const el = document.querySelector("input");
el.value = "fresh";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```
```html
<main
  data-got="fresh"
>
  <h1>
    Store!
  </h1>
  <input
    value="second"
  />
</main>
```
## Change
```
UPDATE: main[data-got] null => "fresh"
```
