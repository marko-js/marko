# Render `{"show":false,"promise":{}}`
```html
<main>
  <button
    id="c"
  >
    0
  </button>
</main>
```

# Update `{"show":true,"promise":{"value":"A"}}`
```html
<main
  data-mounts="1"
>
  <div
    class="counter"
  >
    <span>
      A: 1
    </span>
    <button
      class="inc"
    >
      +
    </button>
  </div>
  <button
    id="c"
  >
    0
  </button>
</main>
```
## Change
```
INSERT: main > .counter
UPDATE: main[data-mounts] null => "1"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<main
  data-mounts="1"
>
  <div
    class="counter"
  >
    <span>
      A: 2
    </span>
    <button
      class="inc"
    >
      +
    </button>
  </div>
  <button
    id="c"
  >
    0
  </button>
</main>
```
## Change
```
UPDATE: .counter > span::text@3 "1" => "2"
```
