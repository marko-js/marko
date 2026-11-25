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
document.querySelector("button").click();
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
INSERT: div:nth-of-type(2)
INSERT: div:nth-of-type(3)
INSERT: div:nth-of-type(4)
```

# Update
```js
document.querySelector("button").click();
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
INSERT: div:nth-of-type(5)
INSERT: div:nth-of-type(6)
```
