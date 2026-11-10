# Render
```html
<button
  id="class"
>
  0
</button>
<div>
  direct 0
</div>
<div>
  forwarded 0
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
<div>
  direct 1
</div>
<div>
  forwarded 1
</div>
```
## Change
```
UPDATE: #class::text "0" => "1"
UPDATE: div:nth-of-type(2)::text@10 "0" => "1"
UPDATE: div:nth-of-type(1)::text@7 "0" => "1"
```
