# Render
```html
<button />
<div>
  Id is dynamic
</div>
```

# Update `click("button")`
```html
<button />
<div
  id="dynamic"
/>
```
## Change
```
INSERT: button + #dynamic
REMOVE: #dynamic + div
UPDATE: #dynamic[id] null => "dynamic"
```

# Update `click("button")`
```html
<button />
<div>
  Id is dynamic
</div>
```
## Change
```
INSERT: button + div
REMOVE: div + #dynamic
UPDATE: div::text@6 "" => "dynamic"
```
