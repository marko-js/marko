# Render
```html
Hello
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
INSERT: div
REMOVE: div + ::text("Hello")
UPDATE: div::text@2 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
Hello
<button />
```
## Change
```
INSERT: ::text("Hello")
REMOVE: ::text + div
```
