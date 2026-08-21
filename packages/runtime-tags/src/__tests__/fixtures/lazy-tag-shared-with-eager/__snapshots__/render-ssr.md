# Render
```html
<div
  class="lazy"
>
  <button
    class="shared"
  >
    shared:0
  </button>
</div>
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
<div
  class="lazy"
>
  <button
    class="shared"
  >
    shared:0
  </button>
</div>
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
UPDATE: section > button::text@7 "0" => "1"
```
