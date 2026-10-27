# Render `{"show":false,"open":true,"label":"a"}`
```html
<em>
  a!
</em>
<button>
  toggle
</button>
```

# Update `{"show":true,"open":true,"label":"b"}`
```html
<em>
  b
</em>
<b>
  bY
</b>
<em>
  b!
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em, b
UPDATE: em:nth-of-type(2)::text "a!" => "b!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  b
</em>
<b>
  bY
</b>
<span>
  bY
</span>
<button>
  toggle
</button>
```
## Change
```
REMOVE: span + em
INSERT: b + span
UPDATE: span::text " " => "bY"
```

# Update `{"show":true,"open":true,"label":"c"}`
```html
<em>
  c
</em>
<b>
  cY
</b>
<span>
  cY
</span>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em::text "b" => "c"
UPDATE: b::text "bY" => "cY"
UPDATE: span::text "bY" => "cY"
```

# Update `{"show":false,"open":true,"label":"d"}`
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: em
REMOVE: b
REMOVE: span
```

# Update `{"show":true,"open":true,"label":"e"}`
```html
<em>
  e
</em>
<b>
  eY
</b>
<span>
  eY
</span>
<button>
  toggle
</button>
```
## Change
```
INSERT: em, b
INSERT: b + span
UPDATE: span::text " " => "eY"
```
