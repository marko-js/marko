# Render
```html
<button
  id="class-api"
>
  the-label
</button>
<div
  id="tags-api"
>
  none
</div>
```

# Update
```js
document.querySelector("#class-api").click();
```
```html
<button
  id="class-api"
>
  the-label
</button>
<div
  id="tags-api"
>
  changed
</div>
```
## Change
```
UPDATE: #tags-api::text "none" => "changed"
```
