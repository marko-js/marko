# Render `{"show":true,"items":["a"]}`
```html
<button>
  toggle
</button>
<div>
  <span>
    if input
  </span>
</div>
<div />
<p>
  a
</p>
<p>
  x
</p>
<span>
  show input
</span>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div>
  <span>
    if input
  </span>
</div>
<div>
  <span>
    if state
  </span>
</div>
<p>
  a
</p>
<p>
  x
</p>
<p>
  y
</p>
<span>
  show input
</span>
<span>
  show state
</span>
```
## Change
```
INSERT: div:nth-of-type(2) > span
INSERT: p:nth-of-type(3)
INSERT: span:nth-of-type(2)
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div>
  <span>
    if input
  </span>
</div>
<div />
<p>
  a
</p>
<p>
  x
</p>
<span>
  show input
</span>
```
## Change
```
REMOVE: p
REMOVE: span
REMOVE: div:nth-of-type(2) > span
```

# Update `{"show":false,"items":["a","b"]}`
```html
<button>
  toggle
</button>
<div />
<div />
<p>
  a
</p>
<p>
  b
</p>
<p>
  x
</p>
```
## Change
```
REMOVE: span
REMOVE: div:nth-of-type(1) > span
INSERT: p:nth-of-type(2)
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div />
<div>
  <span>
    if state
  </span>
</div>
<p>
  a
</p>
<p>
  b
</p>
<p>
  x
</p>
<p>
  y
</p>
<span>
  show state
</span>
```
## Change
```
INSERT: div:nth-of-type(2) > span
INSERT: p:nth-of-type(4)
INSERT: span
```

# Update `{"show":true,"items":[]}`
```html
<button>
  toggle
</button>
<div>
  <span>
    if input
  </span>
</div>
<div>
  <span>
    if state
  </span>
</div>
<p>
  x
</p>
<p>
  y
</p>
<span>
  show input
</span>
<span>
  show state
</span>
```
## Change
```
REMOVE: p
REMOVE: p
INSERT: div:nth-of-type(1) > span
INSERT: span:nth-of-type(1)
```
