# Render
```html
<button>
  toggle
</button>
<div
  class="x"
  id="a"
/>
<div
  id="b"
  title="y"
/>
<span
  class="z"
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
REMOVE: #a
REMOVE: #b
REMOVE: span
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
  class="x"
  id="a"
/>
<div
  id="b"
  title="y"
/>
<span
  class="z"
/>
```
## Change
```
INSERT: #a
UPDATE: #a[class] null => "x"
UPDATE: #a[id] null => "a"
INSERT: #b
UPDATE: #b[id] null => "b"
UPDATE: #b[title] null => "y"
INSERT: .z
UPDATE: .z[class] null => "z"
```
