# Render
```html
<button
  id="go"
>
  go
</button>
<div
  id="out"
>
  pending
</div>
```

# Update
```js
document.getElementById("go").click();
```
```html
<button
  id="go"
>
  go
</button>
<div
  id="out"
>
  true,true,true,true
</div>
```
## Change
```
UPDATE: #out::text "pending" => "true,true,true,true"
```
