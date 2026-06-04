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
  : 
</div>
```
## Change
```
INSERT: button + div
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
UPDATE: div::text@3 "" => "2"
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
UPDATE: div::text@0 "" => "x"
UPDATE: div::text@3 "" => "4"
```
