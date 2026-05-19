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
container.querySelector("button").click();
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
REMOVE: div + div
REMOVE: div + span
REMOVE: div + p
REMOVE: div::text("mounted")
INSERT: div::text("destroyed")
```

# Update
```js
container.querySelector("button").click();
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
INSERT: div:nth-of-type(1) + :is(div, span, p)
REMOVE: div:nth-of-type(1)::text("destroyed")
INSERT: div:nth-of-type(1)::text("mounted")
```

# Update
```js
container.querySelector("button").click();
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
REMOVE: div + div
REMOVE: div + span
REMOVE: div + p
REMOVE: div::text("mounted")
INSERT: div::text("destroyed")
```
