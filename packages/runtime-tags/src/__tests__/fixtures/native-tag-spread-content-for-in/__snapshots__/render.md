# Render
```html
<div
  data-name="a"
>
  A 0
</div>
<div
  data-name="b"
>
  B
</div>
```

# Update
```js
document.querySelector("div").click();
```
```html
<div
  data-name="a"
>
  A 1
</div>
<div
  data-name="b"
>
  B
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)::text@2 "0" => "1"
```
