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
INSERT: ::text("falsy")
REMOVE: ::text + p
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
INSERT: p
REMOVE: p + ::text("falsy")
```
