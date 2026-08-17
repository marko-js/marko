# Render `{"show":true,"title":"Store"}`
```html
<main>
  <p>
    Store@0
  </p>
  <button
    id="n"
  >
    n
  </button>
  <em>
    0
  </em>
  <button
    id="c"
  >
    +
  </button>
</main>
```

# Update
```js
document.querySelector("#n").click();
```
```html
<main>
  <p>
    Store@1
  </p>
  <button
    id="n"
  >
    n
  </button>
  <em>
    0
  </em>
  <button
    id="c"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "Store@0" => "Store@1"
```

# Update `{"show":false,"title":"Store?"}`
```html
<main>
  <em>
    0
  </em>
  <button
    id="c"
  >
    +
  </button>
</main>
```
## Change
```
REMOVE: main > p
REMOVE: main > #n
```

# Update `{"show":true,"title":"Fresh"}`
```html
<main>
  <p>
    Fresh@0
  </p>
  <button
    id="n"
  >
    n
  </button>
  <em>
    0
  </em>
  <button
    id="c"
  >
    +
  </button>
</main>
```
## Change
```
INSERT: main > :is(p, #n)
UPDATE: main > p::text " " => "Fresh@0"
```
