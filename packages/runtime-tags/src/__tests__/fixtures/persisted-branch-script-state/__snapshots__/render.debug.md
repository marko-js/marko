# Render `{"title":"Store","show":false}`
```html
<main>
  <h1>
    Store
  </h1>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"title":"Store!","show":true}`
```html
<main
  data-count="1"
>
  <h1>
    Store!
  </h1>
  <p>
    promo
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
INSERT: main > h1 + p
UPDATE: main[data-count] null => "1"
```
