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

# Update `{"title":"Store","show":true}`
```html
<main>
  <h1>
    Store
  </h1>
  <p>
    Twice 0
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
INSERT: main > h1 + p
UPDATE: main > p::text@6 "" => "0"
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
  <p>
    Twice 2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@6 "0" => "2"
```

# Update `{"title":"Store!","show":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    Twice 2
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
