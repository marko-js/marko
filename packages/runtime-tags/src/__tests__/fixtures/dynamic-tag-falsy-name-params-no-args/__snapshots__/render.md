# Render `{"tag":"p"}`
```html
<p>
  falsy
</p>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
falsy
<button />
```
## Change
```
REMOVE: p
INSERT: ::text("falsy")
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  falsy
</p>
<button />
```
## Change
```
REMOVE: ::text("falsy")
INSERT: p
```
