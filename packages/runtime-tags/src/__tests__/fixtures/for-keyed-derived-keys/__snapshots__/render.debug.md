# Render `{"items":[{"id":1,"name":"a"},{"id":2,"name":"b"},{"id":3,"name":"c"}]}`
```html
<button>
  reverse
</button>
<span>
  a
</span>
<span>
  b
</span>
<span>
  c
</span>
<em>
  a
</em>
<em>
  b
</em>
<em>
  c
</em>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  reverse
</button>
<span>
  c
</span>
<span>
  b
</span>
<span>
  a
</span>
<em>
  c
</em>
<em>
  b
</em>
<em>
  a
</em>
```
## Change
```
REMOVE: span:nth-of-type(3) + span
INSERT: button + span
REMOVE: span:nth-of-type(3) + span
INSERT: button + span
REMOVE: em:nth-of-type(3) + em
INSERT: span:nth-of-type(3) + em
REMOVE: em:nth-of-type(3) + em
INSERT: span:nth-of-type(3) + em
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  reverse
</button>
<span>
  a
</span>
<span>
  b
</span>
<span>
  c
</span>
<em>
  a
</em>
<em>
  b
</em>
<em>
  c
</em>
```
## Change
```
REMOVE: span:nth-of-type(3) + span
INSERT: button + span
REMOVE: span:nth-of-type(3) + span
INSERT: button + span
REMOVE: em:nth-of-type(3) + em
INSERT: span:nth-of-type(3) + em
REMOVE: em:nth-of-type(3) + em
INSERT: span:nth-of-type(3) + em
```
