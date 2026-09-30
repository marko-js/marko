# Render
```html
<div>
  A 1
</div>
<button />
```

# Update `click("button")`
```html
<span>
  B 1
</span>
<button />
```
## Change
```
INSERT: span
REMOVE: span + div
UPDATE: span::text@2 "" => "1"
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
