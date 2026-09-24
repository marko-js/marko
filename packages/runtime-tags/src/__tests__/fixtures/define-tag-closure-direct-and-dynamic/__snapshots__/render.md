# Render
```html
<button>
  toggle
</button>
<div
  class="a"
/>
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
<div
  class="a"
/>
```
## Change
```
INSERT: button + div
INSERT: div:nth-of-type(1) + div
UPDATE: div:nth-of-type(1)[class] null => "a"
UPDATE: div:nth-of-type(2)[class] null => "a"
```
