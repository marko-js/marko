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
REMOVE: ::text("Fallback Body")
INSERT: .custom
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
REMOVE: div
INSERT: ::text("Fallback Body")
```
