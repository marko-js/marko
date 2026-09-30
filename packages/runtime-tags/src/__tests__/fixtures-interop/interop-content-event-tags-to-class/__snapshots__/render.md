# Render
```html
<div
  id="outer"
>
  0
</div>
<button
  id="tags"
>
  0
</button>
<div
  id="inner"
>
  0
  <span>
    deep body
  </span>
</div>
```

# Update
```js
(document.querySelector("#inner")).click();
```
```html
<div
  id="outer"
>
  0
</div>
<button
  id="tags"
>
  1
</button>
<div
  id="inner"
>
  1
  <span>
    deep body
  </span>
</div>
```
## Change
```
UPDATE: #tags::text "0" => "1"
UPDATE: #inner::text "0" => "1"
```

# Update
```js
(document.querySelector("#tags")).click();
```
```html
<div
  id="outer"
>
  0
</div>
<button
  id="tags"
>
  2
</button>
<div
  id="inner"
>
  1
  <span>
    deep body
  </span>
</div>
```
## Change
```
UPDATE: #tags::text "1" => "2"
```
