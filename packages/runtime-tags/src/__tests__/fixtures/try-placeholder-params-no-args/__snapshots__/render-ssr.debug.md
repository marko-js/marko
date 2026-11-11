# Render
```html
<button />
loading
```

# Update
```html
<button />
a
```
## Change
```
REMOVE: ::text("loading")
INSERT: button + ::text("a")
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button />
loading
```
## Change
```
INSERT: button + ::text("loading")
REMOVE: ::text + ::text("a")
```

# Update
```html
<button />
b
```
## Change
```
INSERT: button + ::text("b")
REMOVE: ::text + ::text("loading")
```
