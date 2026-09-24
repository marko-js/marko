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
REMOVE: button + span
REMOVE: button + #a
REMOVE: button + #b
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
INSERT: #b + .z
INSERT: button + #a
INSERT: #a + #b
UPDATE: .z[class] null => "z"
UPDATE: #a[id] null => "a"
UPDATE: #a[class] null => "x"
UPDATE: #b[id] null => "b"
UPDATE: #b[title] null => "y"
```
