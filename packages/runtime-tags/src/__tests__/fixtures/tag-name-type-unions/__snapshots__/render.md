# Render
```html
<button>
  toggle
</button>
<div
  id="d1"
>
  u
</div>
<div>
  n
</div>
g
<div>
  A ab
</div>
<div
  label="ad"
>
  m
</div>
<div>
  A la
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
u
<span>
  n
</span>
g
<div>
  B ab
</div>
<div>
  A ad
</div>
<div>
  A la
</div>
```
## Change
```
REMOVE: #d1
REMOVE: div
REMOVE: div
REMOVE: div
INSERT: ::text("u")
INSERT: span
INSERT: div:nth-of-type(1)
UPDATE: div:nth-of-type(1)::text@2 "" => "ab"
INSERT: div:nth-of-type(2)
UPDATE: div:nth-of-type(2)::text@2 "" => "ad"
```
