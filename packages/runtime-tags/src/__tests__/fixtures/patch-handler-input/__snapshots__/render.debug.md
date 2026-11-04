# Render `{"title":"Store"}`
```html
<main>
  <h1>
    Store
  </h1>
  <button>
    read
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Store
  </h1>
  <button
    data-seen="Store"
  >
    read
  </button>
</main>
```
## Change
```
UPDATE: main > button[data-seen] null => "Store"
```

# Update `{"title":"Store!"}`
```html
<main>
  <h1>
    Store!
  </h1>
  <button
    data-seen="Store"
  >
    read
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Store!
  </h1>
  <button
    data-seen="Store!"
  >
    read
  </button>
</main>
```
## Change
```
UPDATE: main > button[data-seen] "Store" => "Store!"
```
