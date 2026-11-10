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
UPDATE: #class::text "0" => "1"
UPDATE: #passthrough::text@5 "0" => "1"
UPDATE: #spread::text@5 "0" => "1"
UPDATE: #inner::text@6 "0" => "1"
```
