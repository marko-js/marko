# Render
```html
Body Content
<button />
```

# Update `click("button")`
```html
<div>
  Body Content
</div>
<button />
```
## Change
```
INSERT: div
REMOVE: div + ::text("Body Content")
INSERT: div::text("Body Content")
```

# Update `click("button")`
```html
Body Content
<button />
```
## Change
```
INSERT: ::text("Body Content")
REMOVE: ::text + div
```
