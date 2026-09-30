# Render
```html
<button>
  toggle
</button>
<div
  class="a"
/>
```

# Update `click("button")`
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + div
```

# Update `click("button")`
```html
<button>
  toggle
</button>
<div
  class="a"
/>
```
## Change
```
INSERT: button + .a
UPDATE: .a[class] null => "a"
```
