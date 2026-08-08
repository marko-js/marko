# Render
```html
<div>
  ab:0
</div>
<div>
  cde:0
</div>
```

# Update
```js
document.querySelector("div").click();
```
```html
<div>
  ab:2
</div>
<div>
  cde:2
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)::text@3 "0" => "2"
UPDATE: div:nth-of-type(2)::text@4 "0" => "2"
```
