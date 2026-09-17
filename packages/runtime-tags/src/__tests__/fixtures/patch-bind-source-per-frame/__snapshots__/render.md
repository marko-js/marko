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
UPDATE: #one[title] "a" => "b"
UPDATE: #two[title] "a" => "b"
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
