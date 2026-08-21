# Render
```html
<section>
  <button
    class="shared"
  >
    shared:0
  </button>
</section>
```

# Update
```js
(document.querySelector("section .shared"))?.click();
```
```html
<section>
  <button
    class="shared"
  >
    shared:1
  </button>
</section>
```
## Change
```
UPDATE: .shared::text@7 "0" => "1"
```
