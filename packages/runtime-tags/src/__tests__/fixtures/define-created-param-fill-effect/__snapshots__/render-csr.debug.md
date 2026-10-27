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
