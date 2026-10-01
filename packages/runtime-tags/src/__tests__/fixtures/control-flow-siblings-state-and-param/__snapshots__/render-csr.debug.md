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
INSERT: p:nth-of-type(2) + p
INSERT: span:nth-of-type(1) + span
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
REMOVE: div:nth-of-type(2) > span
REMOVE: p:nth-of-type(2) + p
REMOVE: span + span
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
REMOVE: div:nth-of-type(1) > span
REMOVE: p:nth-of-type(3) + span
INSERT: p:nth-of-type(1) + p
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
INSERT: p:nth-of-type(3) + p
INSERT: p:nth-of-type(4) + span
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
INSERT: div:nth-of-type(1) > span
INSERT: p:nth-of-type(2) + span
REMOVE: div:nth-of-type(2) + p
REMOVE: div:nth-of-type(2) + p
```
