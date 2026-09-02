# Render `{"title":"Store","value":"first","wire":true}`
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

# Update `{"title":"Store!","value":"second","wire":false}`
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
el.value = "loose";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```
```html
<main
  data-got="loose"
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
UPDATE: main[data-got] null => "loose"
```

# Update
```js
// Pins that typing STUCK (uncontrolled now) and nothing reported.
document.querySelector("main").dataset.final =
  document.querySelector("input").value;
```
```html
<main
  data-final="second"
  data-got="loose"
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
UPDATE: main[data-final] null => "second"
```
