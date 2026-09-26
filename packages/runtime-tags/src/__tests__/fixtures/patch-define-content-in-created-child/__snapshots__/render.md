# Render `{"label":"a"}`

# Update `{"label":"b","show":true}`
```html
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: #toggle
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<em>
  b
</em>
```
## Change
```
INSERT: #toggle + em
UPDATE: em::text " " => "b"
```
