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
INSERT: #document > html > head > link
INSERT: link
INSERT: .child
INSERT: .child::text("body")
```

# Update
```html
caught ERROR!
```
## Change
```
REMOVE: link
REMOVE: span
INSERT: ::text("caught ERROR!")
```
