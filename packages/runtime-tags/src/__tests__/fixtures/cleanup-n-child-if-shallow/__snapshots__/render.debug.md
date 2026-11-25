# Render
```html
<button>
  Toggle
</button>
<div>
  mounted
</div>
<div>
  a
</div>
<span>
  b
</span>
<p>
  c
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  destroyed
</div>
```
## Change
```
REMOVE: div
REMOVE: p
REMOVE: span
REMOVE: div::text("mounted")
INSERT: div::text("destroyed")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  mounted
</div>
<div>
  a
</div>
<span>
  b
</span>
<p>
  c
</p>
```
## Change
```
REMOVE: div:nth-of-type(1)::text("destroyed")
INSERT: div:nth-of-type(1)::text("mounted")
INSERT: div:nth-of-type(2), span, p
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  destroyed
</div>
```
## Change
```
REMOVE: div
REMOVE: p
REMOVE: span
REMOVE: div::text("mounted")
INSERT: div::text("destroyed")
```
