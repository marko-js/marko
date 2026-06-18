# Render
```html
<div
  class="x"
>
  <button
    class="inc"
    type="button"
  >
    increment
  </button>
  <span
    class="count"
  >
    0
  </span>
</div>
```

# Update
```js
container.querySelector("button.inc").click();
```
```html
<div
  class="x"
>
  <button
    class="inc"
    type="button"
  >
    increment
  </button>
  <span
    class="count"
  >
    1
  </span>
</div>
```
## Change
```
UPDATE: .count::text "0" => "1"
```

# Update
```js
container.querySelector("button.inc").click();
```
```html
<div
  class="x"
>
  <button
    class="inc"
    type="button"
  >
    increment
  </button>
  <span
    class="count"
  >
    2
  </span>
</div>
```
## Change
```
UPDATE: .count::text "1" => "2"
```
