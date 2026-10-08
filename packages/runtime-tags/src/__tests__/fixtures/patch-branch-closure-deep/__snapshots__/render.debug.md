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

# Update
```js
document.querySelector("button").click();
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
  <span>
    Seen 1
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
INSERT: main > p + span
UPDATE: main > span::text@5 "" => "1"
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
  <p>
    promo
  </p>
  <span>
    Seen 2
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > span::text@5 "1" => "2"
```
