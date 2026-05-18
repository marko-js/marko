# Render
```html
<div>
  0
</div>
<button>
  Add
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  0
</div>
<div>
  1
</div>
<button>
  Add
</button>
```
## Change
```
INSERT: div:nth-of-type(1) + div
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  0
</div>
<div>
  1
</div>
<div>
  2
</div>
<button>
  Add
</button>
```
## Change
```
INSERT: div:nth-of-type(2) + div
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  0
</div>
<div>
  1
</div>
<div>
  2
</div>
<div>
  3
</div>
<button>
  Add
</button>
```
## Change
```
INSERT: div:nth-of-type(3) + div
```
