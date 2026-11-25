# Render

# Update
```html
<span
  class="child"
>
  loading
</span>
```
## Change
```
INSERT: #document > html > head > link
INSERT: link
INSERT: .child
INSERT: .child::text("loading")
```

# Update
```html
try body
```
## Change
```
REMOVE: link
REMOVE: span
INSERT: ::text("try body")
```
