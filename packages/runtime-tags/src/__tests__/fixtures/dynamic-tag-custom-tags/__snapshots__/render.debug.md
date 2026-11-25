# Render
```html
<div>
  Child 1 has 3
</div>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  Child 2 has 3
</div>
<button />
```
## Change
```
REMOVE: div
INSERT: div
UPDATE: div::text@12 "" => "3"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  Child 1 has 3
</div>
<button />
```
## Change
```
REMOVE: div
INSERT: div
UPDATE: div::text@12 "" => "3"
```
