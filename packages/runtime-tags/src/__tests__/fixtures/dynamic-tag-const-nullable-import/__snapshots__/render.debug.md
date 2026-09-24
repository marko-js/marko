# Render
```html
Fallback Body
<button
  id="toggle"
/>
```

# Update
```js
document.querySelector("#toggle").click();
```
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

# Update
```js
document.querySelector("#toggle").click();
```
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
