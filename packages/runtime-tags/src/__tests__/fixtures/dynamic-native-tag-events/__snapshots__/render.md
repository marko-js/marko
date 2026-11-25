# Render
```html
<span
  class="A"
>
  body content
</span>
```

# Update
```js
document.querySelector(".A").click();
```
```html
<div
  class="A"
>
  body content
</div>
```
## Change
```
REMOVE: .A
INSERT: .A
UPDATE: .A[class] null => "A"
```

# Update
```js
document.querySelector(".A").click();
```
```html
<span
  class="A"
>
  body content
</span>
```
## Change
```
REMOVE: .A
INSERT: .A
UPDATE: .A[class] null => "A"
```
