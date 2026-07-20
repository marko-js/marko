# Render
```html
<button
  id="inc"
>
  Inc
</button>
```

# Update
```html
<button
  id="inc"
>
  Inc
</button>
<span>
  0
</span>
```
## Change
```
INSERT: #inc + span
```

# Update
```js
document.querySelector("#inc").click();
```
```html
<button
  id="inc"
>
  Inc
</button>
<span>
  1
</span>
```
## Change
```
UPDATE: span::text "0" => "1"
```
