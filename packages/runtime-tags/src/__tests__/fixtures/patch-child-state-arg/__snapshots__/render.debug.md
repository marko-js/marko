# Render `{"title":"Store"}`
```html
<main>
  <h1>
    Store
  </h1>
  <p>
    Value 0
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
```html
<main>
  <h1>
    Store
  </h1>
  <p>
    Value 1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@6 "0" => "1"
```

# Update `{"title":"Store!"}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    Value 1
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
    Value 2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@6 "1" => "2"
```
