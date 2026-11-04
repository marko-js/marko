# Render
```html
<div
  id="tags-api"
>
  tags
</div>
<section>
  <button
    id="class-api"
  >
    hi: 0
  </button>
</section>
```

# Update
```js
(document.querySelector("#class-api")).click();
```
```html
<div
  id="tags-api"
>
  tags
</div>
<section>
  <button
    id="class-api"
  >
    hi: 1
  </button>
</section>
```
## Change
```
UPDATE: #class-api::text@4 "0" => "1"
```

# Update
```js
(document.querySelector("#class-api")).click();
```
```html
<div
  id="tags-api"
>
  tags
</div>
<section>
  <button
    id="class-api"
  >
    hi: 2
  </button>
</section>
```
## Change
```
UPDATE: #class-api::text@4 "1" => "2"
```
