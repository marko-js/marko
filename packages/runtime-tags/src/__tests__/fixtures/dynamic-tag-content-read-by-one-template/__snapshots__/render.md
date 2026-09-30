# Render
```html
<span>
  B Hello
</span>
<button />
```

# Update `click("button")`
```html
<div>
  A 1
</div>
<button />
```
## Change
```
INSERT: div
REMOVE: div + span
UPDATE: div::text@2 "" => "1"
```

# Update `click("button")`
```html
<span>
  B Hello
</span>
<button />
```
## Change
```
INSERT: span
REMOVE: span + div
INSERT: span::text@0 + ::text("Hello")
```
