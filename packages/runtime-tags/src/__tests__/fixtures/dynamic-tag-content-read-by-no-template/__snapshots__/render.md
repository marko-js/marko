# Render
```html
<div>
  A 1
</div>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  B 1
</span>
<button />
```
## Change
```
REMOVE: div
INSERT: span
UPDATE: span::text@2 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  A 1
</div>
<button />
```
## Change
```
REMOVE: span
INSERT: div
UPDATE: div::text@2 "" => "1"
```
