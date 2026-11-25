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
REMOVE: #kept
INSERT: div
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
REMOVE: div
INSERT: #kept
UPDATE: #kept[aria-label] null => "label"
UPDATE: #kept[id] null => "kept"
```
