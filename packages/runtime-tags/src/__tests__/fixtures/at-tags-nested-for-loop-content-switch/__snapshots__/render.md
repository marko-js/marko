# Render
```html
<button
  data-tab="0"
>
  x0
</button>
<button
  data-tab="1"
>
  x1
</button>
<button
  data-tab="2"
>
  y0
</button>
<button
  data-tab="3"
>
  y1
</button>
<div>
  <button
    class="inc"
  >
    x0: 0
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
  x0
</button>
<button
  data-tab="1"
>
  x1
</button>
<button
  data-tab="2"
>
  y0
</button>
<button
  data-tab="3"
>
  y1
</button>
<div>
  <button
    class="inc"
  >
    x0: 1
  </button>
</div>
```
## Change
```
UPDATE: .inc::text@4 "0" => "1"
```

# Update
```js
document.querySelector(`[data-tab="${index}"]`).click();
```
```html
<button
  data-tab="0"
>
  x0
</button>
<button
  data-tab="1"
>
  x1
</button>
<button
  data-tab="2"
>
  y0
</button>
<button
  data-tab="3"
>
  y1
</button>
<div>
  <button
    class="inc"
  >
    y0: 1
  </button>
</div>
```
## Change
```
UPDATE: .inc::text@0 "x" => "y"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  data-tab="0"
>
  x0
</button>
<button
  data-tab="1"
>
  x1
</button>
<button
  data-tab="2"
>
  y0
</button>
<button
  data-tab="3"
>
  y1
</button>
<div>
  <button
    class="inc"
  >
    y0: 2
  </button>
</div>
```
## Change
```
UPDATE: .inc::text@4 "1" => "2"
```

# Update
```js
document.querySelector(`[data-tab="${index}"]`).click();
```
```html
<button
  data-tab="0"
>
  x0
</button>
<button
  data-tab="1"
>
  x1
</button>
<button
  data-tab="2"
>
  y0
</button>
<button
  data-tab="3"
>
  y1
</button>
<div>
  <button
    class="inc"
  >
    x0: 2
  </button>
</div>
```
## Change
```
UPDATE: .inc::text@0 "y" => "x"
```
