# Render `{"obj":{"p":1,"q":2},"sel":"p","b":"x"}`
```html
<span>
  1x
</span>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  2x
</span>
<button />
```
## Change
```
UPDATE: span::text@0 "1" => "2"
```
