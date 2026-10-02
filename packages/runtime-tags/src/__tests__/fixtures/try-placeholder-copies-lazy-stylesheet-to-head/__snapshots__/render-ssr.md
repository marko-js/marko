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
INSERT: link
INSERT: .child
INSERT: .child::text("loading")
INSERT: #document > html > head > link
```

# Update
```html
try body
```
## Change
```
REMOVE: span
REMOVE: link
INSERT: ::text("try body")
```
