# Render `{"type":"h2"}`
```html
<button
  id="inc"
>
  0
</button>
<h2>
  input driven: content registered, body dropped
</h2>
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
<h2>
  input driven: content registered, body dropped
</h2>
```
## Change
```
UPDATE: #inc::text "0" => "1"
```
