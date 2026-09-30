# Render
```html
<span
  class="A"
>
  body content
</span>
<button />
```

# Update `click("button")`
```html
<div
  class="A"
>
  body content
</div>
<button />
```
## Change
```
INSERT: .A
REMOVE: .A + .A
INSERT: .A::text("body content")
UPDATE: .A[class] null => "A"
```

# Update `click("button")`
```html
<span
  class="A"
>
  body content
</span>
<button />
```
## Change
```
INSERT: .A
REMOVE: .A + .A
INSERT: .A::text("body content")
UPDATE: .A[class] null => "A"
```
