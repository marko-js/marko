# Render
```html
<div>
  Child 1 has 3
</div>
<button />
```

# Update `click("button")`
```html
<div>
  Child 2 has 3
</div>
<button />
```
## Change
```
INSERT: div
REMOVE: div + div
UPDATE: div::text@12 "" => "3"
```

# Update `click("button")`
```html
<div>
  Child 1 has 3
</div>
<button />
```
## Change
```
INSERT: div
REMOVE: div + div
UPDATE: div::text@12 "" => "3"
```
