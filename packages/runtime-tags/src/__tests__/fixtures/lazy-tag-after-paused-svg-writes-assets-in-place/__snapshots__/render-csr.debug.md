# Render
```html
<svg />
```

# Update
```html
<svg />
<span
  class="child"
>
  x
</span>
```
## Change
```
INSERT: .child
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
UPDATE: svg > rect[width] null => "2"
```
