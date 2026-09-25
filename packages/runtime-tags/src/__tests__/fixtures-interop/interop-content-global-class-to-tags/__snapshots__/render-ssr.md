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
  0:string
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
  1:string
</div>
```
## Change
```
REMOVE: #spread > :is(::text("0"), ::text(":"), ::text("string"))
UPDATE: #class::text "0" => "1"
INSERT: #spread::text("1")
INSERT: #spread::text@0 + ::text(":")
INSERT: #spread::text@1 + ::text("string")
```
