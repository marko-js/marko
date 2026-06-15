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
el.querySelector("button").click();
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
INSERT: button + ::text("u")
REMOVE: ::text@0 + #d1
INSERT: ::text@0 + span
REMOVE: span + div
INSERT: span::text("n")
INSERT: ::text@1 + div
REMOVE: div:nth-of-type(1) + div
UPDATE: div:nth-of-type(1)::text@2 "" => "ab"
INSERT: div:nth-of-type(1) + div
REMOVE: div:nth-of-type(2) + div
UPDATE: div:nth-of-type(2)::text@2 "" => "ad"
```
