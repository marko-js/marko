# Render
```html
<div
  id="class"
>
  0
</div>
<div>
  <button
    id="tags"
  >
    0
  </button>
</div>
```

# Update
```js
(document.querySelector("#tags")).click();
```
```html
<div
  id="class"
>
  1
</div>
<div>
  <button
    id="tags"
  >
    1
  </button>
</div>
```
## Change
```
UPDATE: #tags::text "0" => "1"
UPDATE: #class::text "0" => "1"
```

# Update
```js
(document.querySelector("#tags")).click();
```
```html
<div
  id="class"
>
  2
</div>
<div>
  <button
    id="tags"
  >
    2
  </button>
</div>
```
## Change
```
UPDATE: #tags::text "1" => "2"
UPDATE: #class::text "1" => "2"
```
