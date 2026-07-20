# Render
```html
<button
  id="class-api"
>
  Reset
</button>
<div
  id="tags-api"
>
  hello
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
  Reset
</button>
<div
  id="tags-api"
/>
```
## Change
```
UPDATE: #tags-api::text "hello" => ""
```
