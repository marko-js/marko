# Render
```html
<button>
  Inc
</button>
<div>
  x: 0
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Inc
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

# Update
```html
<button>
  Inc
</button>
<div>
  x: 2
</div>
```
## Change
```
INSERT: button + div
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Inc
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
  Inc
</button>
<div>
  x: 4
</div>
```
## Change
```
INSERT: button + div
UPDATE: div::text@0 "" => "x"
```
