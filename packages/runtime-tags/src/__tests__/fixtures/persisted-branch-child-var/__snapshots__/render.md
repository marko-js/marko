# Render `{"show":false,"label":"a"}`
```html
<main>
  <button
    id="c"
  >
    0
  </button>
</main>
```

# Update `{"show":true,"label":"b"}`
```html
<main>
  <div
    class="box"
  >
    b
  </div>
  <button
    id="read"
  >
    read
  </button>
  <button
    id="c"
  >
    0
  </button>
</main>
```
## Change
```
INSERT: main > :is(.box, #read)
UPDATE: .box::text " " => "b"
```

# Update
```js
(document.querySelector("#read")).click();
assert.strictEqual(
  (document.querySelector("main")).dataset.tag,
  "DIV",
);
```
```html
<main
  data-tag="DIV"
>
  <div
    class="box"
  >
    b
  </div>
  <button
    id="read"
  >
    read
  </button>
  <button
    id="c"
  >
    0
  </button>
</main>
```
## Change
```
UPDATE: main[data-tag] null => "DIV"
```
