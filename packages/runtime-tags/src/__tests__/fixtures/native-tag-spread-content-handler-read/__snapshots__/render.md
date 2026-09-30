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

# Update `click("button.cap")`
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
