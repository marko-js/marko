# Render `{"title":"a"}`
```html
<main>
  <h2>
    a
  </h2>
  <p>
    {"label":"a","value":0}
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
    {"label":"a","value":1}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "{\"label\":\"a\",\"value\":0}" => "{\"label\":\"a\",\"value\":1}"
```

# Update `{"title":"b"}`
```html
<main>
  <h2>
    b
  </h2>
  <p>
    {"label":"b","value":1}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h2::text "a" => "b"
UPDATE: main > p::text "{\"label\":\"a\",\"value\":1}" => "{\"label\":\"b\",\"value\":1}"
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
    {"label":"b","value":2}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "{\"label\":\"b\",\"value\":1}" => "{\"label\":\"b\",\"value\":2}"
```
