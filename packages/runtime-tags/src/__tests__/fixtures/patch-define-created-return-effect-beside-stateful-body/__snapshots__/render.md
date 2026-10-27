# Render `{"show":false,"open":true,"label":"a"}`
```html
<em>
  a
</em>
<button
  id="t"
>
  toggle
</button>
```
## Console
```
LOG "effect" "a" true
```

# Update `{"show":true,"open":true,"label":"b"}`
```html
<em>
  k
</em>
<b>
  k!
</b>
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
INSERT: em, b
UPDATE: em:nth-of-type(2)::text "a" => "b"
```
## Console
```
LOG "effect" "k" true
LOG "effect" "b" true
```

# Update
```js
document.querySelector("#t").click();
```
```html
<em>
  k
</em>
<b>
  k!
</b>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
REMOVE: b + em
```
## Console
```
LOG "effect" "b" false
```

# Update `{"show":true,"open":true,"label":"c"}`
## Console
```
LOG "effect" "c" false
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
REMOVE: b
```
## Console
```
LOG "effect" "d" false
```

# Update `{"show":true,"open":true,"label":"e"}`
```html
<em>
  k
</em>
<b>
  k!
</b>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
INSERT: em, b
```
## Console
```
LOG "effect" "k" true
LOG "effect" "e" false
```
