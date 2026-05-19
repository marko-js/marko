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
container.querySelector(".A").click();
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
INSERT: .A
REMOVE: .A + .A
INSERT: .A::text("body content")
UPDATE: .A[class] null => "A"
```

# Update
```js
container.querySelector(".A").click();
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
INSERT: .A
REMOVE: .A + .A
INSERT: .A::text("body content")
UPDATE: .A[class] null => "A"
```
