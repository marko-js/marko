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
  hi: 0
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
  hi: 1
</button>
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
<button
  id="class-api"
>
  hi: 2
</button>
```
## Change
```
UPDATE: #class-api::text@4 "1" => "2"
```
