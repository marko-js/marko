# Render
```html
<div>
  1 1 2
</div>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  3 3 4
</div>
<button />
```
## Change
```
UPDATE: div::text@4 "2" => "4"
UPDATE: div::text@2 "1" => "3"
UPDATE: div::text@0 "1" => "3"
```
