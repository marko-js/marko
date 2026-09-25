# Render
```html
<button
  id="class"
>
  0
</button>
<div
  class="stuff"
  id="spread"
>
  Body 0
</div>
<div
  id="passthrough"
>
  Body 0
</div>
<span
  id="inner"
>
  Inner 0
</span>
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
  class="stuff"
  id="spread"
>
  Body 1
</div>
<div
  id="passthrough"
>
  Body 1
</div>
<span
  id="inner"
>
  Inner 1
</span>
```
## Change
```
REMOVE: #passthrough::text@5 + ::text("Body ")
REMOVE: #passthrough::text@5 + ::text("0")
REMOVE: #spread > :is(::text("Body "), ::text("0"))
REMOVE: #inner::text@6 + ::text("Inner ")
REMOVE: #inner::text@6 + ::text("0")
UPDATE: #class::text "0" => "1"
INSERT: #passthrough::text("Body ")
INSERT: #passthrough::text@0 + ::text("1")
INSERT: #spread::text("Body ")
INSERT: #spread::text@0 + ::text("1")
INSERT: #inner::text("Inner ")
INSERT: #inner::text@0 + ::text("1")
```
