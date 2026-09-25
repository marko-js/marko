# Render `{"show":false}`
```html
<div
  aria-label="label"
  id="kept"
/>
```

# Update `{"show":true}`
```html
<div />
```
## Change
```
INSERT: div
REMOVE: div + #kept
```

# Update `{"show":false}`
```html
<div
  aria-label="label"
  id="kept"
/>
```
## Change
```
INSERT: #kept
REMOVE: #kept + div
UPDATE: #kept[aria-label] null => "label"
UPDATE: #kept[id] null => "kept"
```
