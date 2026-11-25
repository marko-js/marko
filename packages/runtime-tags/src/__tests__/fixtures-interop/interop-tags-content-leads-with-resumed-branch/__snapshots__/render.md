# Render
```html
<button>
  0
  <i />
</button>
```

# Update
```js
(document.querySelector("button")).click();
```
```html
<button />
```
## Change
```
REMOVE: button > i
REMOVE: button::text("0")
```

# Update
```js
(document.querySelector("button")).click();
```
```html
<button>
  2
  <i />
</button>
```
## Change
```
INSERT: button::text("2"), button > i
UPDATE: button::text " " => "2"
```

# Update
```js
(document.querySelector("button")).click();
```
```html
<button />
```
## Change
```
REMOVE: button > i
REMOVE: button::text("2")
```
