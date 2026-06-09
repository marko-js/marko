# Render
```html
<button>
  Inc
</button>
```

# Update
```html
<button>
  Inc
</button>
<div>
  x: 0
</div>
```
## Change
```
INSERT: button + div
```

# Update
```js
container.querySelector("button").click();
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
container.querySelector("button").click();
```
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
UPDATE: div::text@0 "" => "x"
```

# Update
```js
container.querySelector("button").click();
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
container.querySelector("button").click();
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
```
