# Render `{"promise":{}}`
```html
<button
  id="inc"
>
  0
</button>
<em>
  ok
</em>
```

# Update `{"promise":{}}`
```html
<button
  id="inc"
>
  0
</button>
<b>
  boom
</b>
```
## Change
```
INSERT: #inc + b
REMOVE: b + em
UPDATE: b::text " " => "boom"
```

# Update
```js
document.querySelector("#inc").click();
```
```html
<button
  id="inc"
>
  1
</button>
<b>
  boom
</b>
```
## Change
```
UPDATE: #inc::text "0" => "1"
```
