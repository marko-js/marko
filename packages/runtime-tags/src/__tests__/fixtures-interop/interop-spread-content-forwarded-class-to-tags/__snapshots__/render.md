# Render
```html
<button
  id="class"
>
  0
</button>
<div
  id="forwarded"
>
  Hello 0
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
  id="forwarded"
>
  Hello 1
</div>
```
## Change
```
UPDATE: #class::text "0" => "1"
UPDATE: #forwarded::text@6 "0" => "1"
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  2
</button>
<div
  id="forwarded"
>
  Hello 2
</div>
```
## Change
```
UPDATE: #class::text "1" => "2"
UPDATE: #forwarded::text@6 "1" => "2"
```
