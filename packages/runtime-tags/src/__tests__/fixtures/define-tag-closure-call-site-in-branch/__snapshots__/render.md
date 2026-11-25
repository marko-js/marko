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
REMOVE: div
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
INSERT: .a
UPDATE: .a[class] null => "a"
```
