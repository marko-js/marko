# Render
```html
<button>
  Toggle
</button>
<div>
  mounted
</div>
<div>
  child
</div>
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
  child
</div>
```
## Change
```
REMOVE: div:nth-of-type(1)::text("destroyed")
INSERT: div:nth-of-type(1)::text("mounted")
INSERT: div:nth-of-type(2)
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
REMOVE: div::text("mounted")
INSERT: div::text("destroyed")
```
