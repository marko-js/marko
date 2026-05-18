# Render
```html
<div
  class="foo"
>
  default
</div>
<span
  class="foo"
>
  default
</span>
```

# Update
```html
<div
  class="foo"
>
  Div
</div>
<span
  class="foo"
>
  Span
</span>
```
## Change
```
REMOVE: div::text("default")
INSERT: div::text("Div")
REMOVE: span::text("default")
INSERT: span::text("Span")
```
