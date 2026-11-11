# Render
```html
<button />
```

# Update
```html
<button />
loading
```
## Change
```
INSERT: button + ::text("loading")
```

# Update
```html
<button />
a
```
## Change
```
INSERT: button + ::text("a")
REMOVE: ::text + ::text("loading")
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
