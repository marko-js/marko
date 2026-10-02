# Render
```html
<div>
  1 3 0
</div>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  4 6 1
</div>
<button />
```
## Change
```
UPDATE: div::text@4 "0" => "1"
UPDATE: div::text@0 "1" => "4"
UPDATE: div::text@2 "3" => "6"
```
