# Render
```html
<div>
  a
</div>
<button>
  More
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  a
</div>
<div>
  b
</div>
<div>
  a
</div>
<div>
  b
</div>
<button>
  More
</button>
```
## Change
```
INSERT: div:nth-of-type(2) + div
INSERT: div:nth-of-type(1) + div
INSERT: div:nth-of-type(3) + div
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  a
</div>
<div>
  b
</div>
<div>
  a
</div>
<div>
  b
</div>
<div>
  a
</div>
<div>
  b
</div>
<button>
  More
</button>
```
## Change
```
INSERT: div:nth-of-type(4) + div
INSERT: div:nth-of-type(5) + div
```
