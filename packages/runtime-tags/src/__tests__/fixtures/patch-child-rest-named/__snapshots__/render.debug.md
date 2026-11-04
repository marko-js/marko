# Render `{"title":"a"}`
```html
<main>
  <h2>
    a
  </h2>
  <p>
    {"value":0}
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
  <h2>
    a
  </h2>
  <p>
    {"value":1}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "{\"value\":0}" => "{\"value\":1}"
```

# Update `{"title":"b"}`
```html
<main>
  <h2>
    b
  </h2>
  <p>
    {"value":1}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h2::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h2>
    b
  </h2>
  <p>
    {"value":2}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "{\"value\":1}" => "{\"value\":2}"
```
