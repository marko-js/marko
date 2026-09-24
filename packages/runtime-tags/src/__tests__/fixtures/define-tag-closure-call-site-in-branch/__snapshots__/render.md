# Render
```html
<button>
  toggle
</button>
<div
  class="a"
/>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + div
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div
  class="a"
/>
```
## Change
```
INSERT: button + .a
UPDATE: .a[class] null => "a"
```
