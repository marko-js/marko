# Render `{"show":false,"promise":{}}`
```html
<main>
  <em>
    closed
  </em>
</main>
```

# Update `{"show":true,"promise":{"value":"b"}}`
```html
<main>
  <b
    class="pill"
  >
    b:2
  </b>
  <button
    class="inc"
  >
    +
  </button>
</main>
```
## Change
```
REMOVE: main > em
INSERT: main > :is(.pill, .inc)
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<main>
  <b
    class="pill"
  >
    b:3
  </b>
  <button
    class="inc"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: .pill::text@2 "2" => "3"
```
