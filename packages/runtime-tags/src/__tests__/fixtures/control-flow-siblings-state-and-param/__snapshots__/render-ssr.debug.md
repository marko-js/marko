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
