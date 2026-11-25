# Render
```html
<svg />
```

# Update
```html
<svg>
  <rect
    height="1"
    width="2"
  />
</svg>
<span
  class="child"
>
  x
</span>
```
## Change
```
INSERT: svg > rect
INSERT: link
INSERT: .child
INSERT: .child::text("x")
```
