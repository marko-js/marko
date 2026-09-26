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
INSERT: span
REMOVE: span + div
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
INSERT: div
REMOVE: div + span
UPDATE: div::text@2 "" => "1"
```
