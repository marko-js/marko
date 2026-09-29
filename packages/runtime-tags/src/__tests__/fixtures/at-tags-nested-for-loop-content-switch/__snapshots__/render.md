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
    y0: 0
  </button>
</div>
```
## Change
```
INSERT: div > .inc
REMOVE: .inc + .inc
UPDATE: .inc::text@4 "" => "0"
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
    y0: 1
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
    x0: 0
  </button>
</div>
```
## Change
```
INSERT: div > .inc
REMOVE: .inc + .inc
UPDATE: .inc::text@4 "" => "0"
```
