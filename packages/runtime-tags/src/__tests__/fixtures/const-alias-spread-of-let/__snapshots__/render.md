# Render
```html
<span>
  1|2
</span>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  3|4
</span>
<button />
```
## Change
```
UPDATE: span::text@0 "1" => "3"
UPDATE: span::text@2 "2" => "4"
```
