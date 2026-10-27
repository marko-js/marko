# Render `{"show":false,"open":true,"label":"a"}`
```html
<em>
  dyn
</em>
<button
  id="t"
>
  toggle
</button>
```
## Console
```
LOG "effect" "dyn"
```

# Update `{"show":true,"open":true,"label":"b"}`
```html
<em>
  k
</em>
<em>
  b
</em>
<em>
  dyn
</em>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
INSERT: em, em
```
## Console
```
LOG "effect" "k"
LOG "effect" "b"
```

# Update
```js
document.querySelector("#t").click();
```
```html
<em>
  k
</em>
<em>
  b
</em>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
REMOVE: em:nth-of-type(2) + em
```

# Update `{"show":true,"open":true,"label":"c"}`
```html
<em>
  k
</em>
<em>
  c
</em>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text "b" => "c"
```
## Console
```
LOG "effect" "c"
```

# Update `{"show":false,"open":true,"label":"d"}`
```html
<button
  id="t"
>
  toggle
</button>
```
## Change
```
REMOVE: em
REMOVE: em
```

# Update `{"show":true,"open":true,"label":"e"}`
```html
<em>
  k
</em>
<em>
  e
</em>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
INSERT: em, em
```
## Console
```
LOG "effect" "k"
LOG "effect" "e"
```
