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
REMOVE: div
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
<div
  class="a"
/>
```
## Change
```
INSERT: div:nth-of-type(1)
UPDATE: div:nth-of-type(1)[class] null => "a"
INSERT: div:nth-of-type(2)
UPDATE: div:nth-of-type(2)[class] null => "a"
```
