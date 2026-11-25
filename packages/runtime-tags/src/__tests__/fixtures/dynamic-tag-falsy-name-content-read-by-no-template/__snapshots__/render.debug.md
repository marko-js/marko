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
REMOVE: ::text("Hello")
INSERT: div
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
REMOVE: div
INSERT: ::text("Hello")
```
