# Render
```html
<span
  class="A"
>
  body content
</span>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="A"
>
  body content
</div>
<button />
```
## Change
```
REMOVE: .A
INSERT: .A
UPDATE: .A[class] null => "A"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span
  class="A"
>
  body content
</span>
<button />
```
## Change
```
REMOVE: .A
INSERT: .A
UPDATE: .A[class] null => "A"
```
