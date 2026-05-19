# Render
```html
<div>
  Child 1 has 3
</div>
<button />
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  Child 2 has 3
</div>
<button />
```
## Change
```
INSERT: div
REMOVE: div + div
UPDATE: div::text@12 "" => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  Child 1 has 3
</div>
<button />
```
## Change
```
INSERT: div
REMOVE: div + div
UPDATE: div::text@12 "" => "3"
```
