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
    default-value="second"
    value="first"
  />
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
UPDATE: main > input[value] "first" => "second"
```

# Update
```js
const el = document.querySelector("input");
el.value = "loose";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```

# Update
```js
// Pins that typing STUCK (uncontrolled now) and nothing reported.
document.querySelector("main").dataset.final =
  document.querySelector("input").value;
```
```html
<main
  data-final="loose"
>
  <h1>
    Store!
  </h1>
  <input
    default-value="second"
    value="loose"
  />
</main>
```
## Change
```
UPDATE: main[data-final] null => "loose"
```
