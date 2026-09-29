# Render `{"title":"Store","text":"first"}`
```html
<main>
  <h1>
    Store
  </h1>
  <textarea>
    first
  </textarea>
</main>
```

# Update `{"title":"Store!","text":"second"}`
```html
<main>
  <h1>
    Store!
  </h1>
  <textarea
    default-value="first"
  >
    second
  </textarea>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
```

# Update
```js
const el = document.querySelector("textarea");
el.value = "draft";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```
```html
<main
  data-text="draft"
>
  <h1>
    Store!
  </h1>
  <textarea
    default-value="first"
  >
    second
  </textarea>
</main>
```
## Change
```
UPDATE: main[data-text] null => "draft"
```
