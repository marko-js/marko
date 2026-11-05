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
REMOVE: button::text("0")
REMOVE: button > i
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
INSERT: button > :is(::text("2"), i)
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
REMOVE: button::text("2")
REMOVE: button > i
```
