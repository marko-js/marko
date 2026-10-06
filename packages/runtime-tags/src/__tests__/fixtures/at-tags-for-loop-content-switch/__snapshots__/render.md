# Render
```html
<button
  data-tab="0"
>
  a
</button>
<button
  data-tab="1"
>
  b
</button>
<div>
  <button
    class="inc"
  >
    a: 0
  </button>
</div>
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  data-tab="0"
>
  a
</button>
<button
  data-tab="1"
>
  b
</button>
<div>
  <button
    class="inc"
  >
    a: 1
  </button>
</div>
```
## Change
```
UPDATE: .inc::text@3 "0" => "1"
```

# Update
```js
document.querySelector('[data-tab="1"]').click();
```
```html
<button
  data-tab="0"
>
  a
</button>
<button
  data-tab="1"
>
  b
</button>
<div>
  <button
    class="inc"
  >
    b: 1
  </button>
</div>
```
## Change
```
UPDATE: .inc::text@0 "a" => "b"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  data-tab="0"
>
  a
</button>
<button
  data-tab="1"
>
  b
</button>
<div>
  <button
    class="inc"
  >
    b: 2
  </button>
</div>
```
## Change
```
UPDATE: .inc::text@3 "1" => "2"
```

# Update
```js
document.querySelector('[data-tab="0"]').click();
```
```html
<button
  data-tab="0"
>
  a
</button>
<button
  data-tab="1"
>
  b
</button>
<div>
  <button
    class="inc"
  >
    a: 2
  </button>
</div>
```
## Change
```
UPDATE: .inc::text@0 "b" => "a"
```
