# Render
```html
<button
  id="outer"
>
  0
</button>
<div
  data-n="0"
>
  <button
    id="counter"
  >
    0
  </button>
</div>
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<button
  id="outer"
>
  0
</button>
<div
  data-n="0"
>
  <button
    id="counter"
  >
    1
  </button>
</div>
```
## Change
```
UPDATE: #counter::text "0" => "1"
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<button
  id="outer"
>
  1
</button>
<div
  data-n="1"
>
  <button
    id="counter"
  >
    1
  </button>
</div>
```
## Change
```
UPDATE: #outer::text "0" => "1"
UPDATE: div[data-n] "0" => "1"
```
