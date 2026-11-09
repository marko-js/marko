# Render
```html
<button
  id="class"
>
  0
</button>
<div
  id="spread"
>
  0:undefined
</div>
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  1
</button>
<div
  id="spread"
>
  1:undefined
</div>
```
## Change
```
UPDATE: #class::text "0" => "1"
UPDATE: #spread::text@0 "0" => "1"
```
