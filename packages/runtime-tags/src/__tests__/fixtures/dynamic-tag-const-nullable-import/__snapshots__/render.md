# Render
```html
Fallback Body
<button
  id="toggle"
/>
```

# Update `click("#toggle")`
```html
<div
  class="custom"
>
  custom with body
</div>
<button
  id="toggle"
/>
```
## Change
```
INSERT: .custom
REMOVE: .custom + ::text("Fallback Body")
UPDATE: .custom::text@7 "" => "with"
```

# Update `click("#toggle")`
```html
Fallback Body
<button
  id="toggle"
/>
```
## Change
```
INSERT: ::text("Fallback Body")
REMOVE: ::text + div
```
