# Render `{"title":"a","one":{},"two":{}}`
```html
<main>
  <button
    id="one"
    title="a"
  >
    one
  </button>
  <button
    id="two"
    title="a"
  >
    two
  </button>
  <em>
    0
  </em>
</main>
```

# Update `{"title":"b","one":{},"two":{"value":2}}`
```html
<main>
  <button
    id="one"
    title="b"
  >
    one
  </button>
  <button
    id="two"
    title="b"
  >
    two
  </button>
  <em>
    0
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "0" => "0"
UPDATE: #one[title] "a" => "b"
REMOVE: main > #two
INSERT: #one + #two
```

# Update
```js
document.querySelector("#two").click();
```
```html
<main>
  <button
    id="one"
    title="b"
  >
    one
  </button>
  <button
    data-seen="b"
    id="two"
    title="b"
  >
    two
  </button>
  <em>
    0
  </em>
</main>
```
## Change
```
UPDATE: #two[data-seen] null => "b"
```
