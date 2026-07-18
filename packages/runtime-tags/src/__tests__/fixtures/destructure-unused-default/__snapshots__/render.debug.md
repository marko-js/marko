# Render
```html
<div
  id="out"
>
  0:k:c
</div>
<button
  id="update"
>
  u
</button>
```

# Update
```js
container.querySelector("#update").click();
```
```html
<div
  id="out"
>
  1:undefined:C
</div>
<button
  id="update"
>
  u
</button>
```
## Change
```
UPDATE: #out::text@0 "0" => "1"
UPDATE: #out::text@12 "c" => "C"
UPDATE: #out::text@2 "k" => "undefined"
```
