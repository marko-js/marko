# Render
```html
<span>
  B Hello
</span>
<button />
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

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  B Hello
</span>
<button />
```
## Change
```
REMOVE: div
INSERT: span
INSERT: span::text("Hello")
```
