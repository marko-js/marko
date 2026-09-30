# Render
```html
<span
  class="A"
>
  body content
</span>
```

# Update `click(".A")`
```html
<div
  class="A"
>
  body content
</div>
```
## Change
```
INSERT: .A
REMOVE: .A + .A
INSERT: .A::text("body content")
UPDATE: .A[class] null => "A"
```

# Update `click(".A")`
```html
<span
  class="A"
>
  body content
</span>
```
## Change
```
INSERT: .A
REMOVE: .A + .A
INSERT: .A::text("body content")
UPDATE: .A[class] null => "A"
```
