# Render
```html
<div
  class="x"
>
  Hello
</div>
<button
  class="cap"
  type="button"
>
  check
</button>
<div
  class="out"
>
  (unchecked)
</div>
```

# Update
```js
container.querySelector("button.cap").click();
```
```html
<div
  class="x"
>
  Hello
</div>
<button
  class="cap"
  type="button"
>
  check
</button>
<div
  class="out"
>
  has-content
</div>
```
## Change
```
UPDATE: .out::text "(unchecked)" => "has-content"
```
