# Render `{"show":false,"label":"a"}`
```html
<button
  id="t"
>
  toggle
</button>
```

# Update `{"show":true,"label":"b"}`
```html
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
INSERT: em
UPDATE: em::text " " => "b"
```
## Console
```
LOG "effect" "b"
```

# Update
```js
document.querySelector("#t").click();
```
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
```

# Update `{"show":true,"label":"c"}`
## Console
```
LOG "effect" "c"
```

# Update `{"show":false,"label":"d"}`

# Update
```js
document.querySelector("#t").click();
```

# Update `{"show":true,"label":"e"}`
```html
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
INSERT: em
UPDATE: em::text " " => "e"
```
## Console
```
LOG "effect" "e"
```
