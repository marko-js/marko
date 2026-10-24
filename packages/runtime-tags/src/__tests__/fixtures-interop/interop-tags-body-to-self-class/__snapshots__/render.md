# Render
```html
<div
  id="tags-api"
>
  tags
</div>
<button
  id="class-api"
>
  <em>
    body
  </em>
   0
</button>
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
<button
  id="class-api"
>
  <em>
    body
  </em>
   1
</button>
```
## Change
```
UPDATE: #class-api::text@1 "0" => "1"
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
<button
  id="class-api"
>
  <em>
    body
  </em>
   2
</button>
```
## Change
```
UPDATE: #class-api::text@1 "1" => "2"
```
