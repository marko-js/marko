# Render

# Update
```html
<span
  class="child"
>
  body
</span>
```
## Change
```
INSERT: link
INSERT: .child
INSERT: .child::text("body")
INSERT: #document > html > head > link
```

# Update
```html
caught ERROR!
```
## Change
```
INSERT: ::text("caught ERROR!")
REMOVE: span
REMOVE: link
```
