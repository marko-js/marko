# Render
```html
<button>
  b
</button>
<div>
  zero
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b
</button>
<div>
  one
</div>
<span>
  shown
</span>
```
## Change
```
INSERT: button + div
REMOVE: div + div
INSERT: div + span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b
</button>
<div>
  two
</div>
<span>
  shown
</span>
```
## Change
```
INSERT: button + div
REMOVE: div + div
```
