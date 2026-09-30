# Render
```html
<div />
<button />
```

# Update `click("button")`
```html
<div>
  [onClick(hello)]
</div>
<button />
```
## Change
```
INSERT: div::text("[onClick(hello)]")
```

# Update `click("button")`
```html
<div>
  [onClick(hello)][onClick(hello)]
</div>
<button />
```
## Change
```
REMOVE: div::text("[onClick(hello)]")
INSERT: div::text("[onClick(hello)][onClick(hello)]")
```

# Update `click("button")`
```html
<div>
  [onClick(hello)][onClick(hello)][onClick(hello)]
</div>
<button />
```
## Change
```
REMOVE: div::text("[onClick(hello)][onClick(hello)]")
INSERT: div::text("[onClick(hello)][onClick(hello)][onClick(hello)]")
```
