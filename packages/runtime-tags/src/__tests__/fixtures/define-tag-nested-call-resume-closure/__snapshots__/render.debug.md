# Render `{"x":"A"}`
```html
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<button />
<span>
  A
</span>
```
## Change
```
INSERT: button + span
UPDATE: span::text " " => "A"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button />
```
## Change
```
REMOVE: button + span
```
