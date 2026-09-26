# Render `{"show":true}`
```html
<p>
  n 0
</p>
<p>
  n 0
</p>
<button
  class="inc"
>
  inc
</button>
<div
  class="count"
>
  0 0
</div>
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<p>
  n 1
</p>
<p>
  n 1
</p>
<button
  class="inc"
>
  inc
</button>
<div
  class="count"
>
  1 1
</div>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@2 "0" => "1"
UPDATE: .count::text@0 "0" => "1"
UPDATE: p:nth-of-type(2)::text@2 "0" => "1"
UPDATE: .count::text@2 "0" => "1"
```
