# Render `{"show":false,"open":true,"label":"a"}`
```html
<span>
  c
</span>
<em>
  y1
</em>
<button
  id="t"
>
  toggle
</button>
```

# Update `{"show":true,"open":true,"label":"b"}`
```html
<span>
  c
</span>
<em>
  b1
</em>
<span>
  c
</span>
<em>
  y1
</em>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
INSERT: span, em
UPDATE: span:nth-of-type(1)::text " " => "c"
UPDATE: em:nth-of-type(1)::text@0 "" => "b"
UPDATE: em:nth-of-type(1)::text@1 "" => "1"
```

# Update
```js
document.querySelector("#t").click();
```
```html
<span>
  o
</span>
<em>
  b1
</em>
<span>
  o
</span>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
REMOVE: span:nth-of-type(2) + em
UPDATE: span:nth-of-type(2)::text "c" => "o"
UPDATE: span:nth-of-type(1)::text "c" => "o"
```

# Update `{"show":true,"open":true,"label":"c"}`
```html
<span>
  o
</span>
<em>
  c1
</em>
<span>
  o
</span>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
UPDATE: em::text@0 "b" => "c"
```

# Update `{"show":false,"open":true,"label":"d"}`
```html
<span>
  o
</span>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
REMOVE: span
REMOVE: em
```

# Update `{"show":true,"open":true,"label":"e"}`
```html
<span>
  o
</span>
<em>
  e1
</em>
<span>
  o
</span>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
INSERT: span, em
UPDATE: span:nth-of-type(1)::text " " => "o"
UPDATE: em::text@0 "" => "e"
UPDATE: em::text@1 "" => "1"
```
