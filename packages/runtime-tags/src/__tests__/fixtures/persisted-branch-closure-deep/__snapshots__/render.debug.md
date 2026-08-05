# Render `{"title":"Store","outer":true,"inner":false}`
```html
<main>
  <h1>
    Store
  </h1>
  <p>
    promo
  </p>
  <button>
    +
  </button>
</main>
```

# Update `{"title":"Store!","outer":true,"inner":false}`
```html
<main>
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
```

# Update `{"title":"Store!","outer":true,"inner":true}`
```html
<main>
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
UPDATE: main > h1::text "Store!" => "Store!"
```

## Patch rejected (navigate)
