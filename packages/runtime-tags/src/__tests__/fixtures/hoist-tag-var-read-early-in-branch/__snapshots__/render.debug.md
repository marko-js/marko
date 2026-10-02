# Render `{"x":1}`
```html
<button />
<div>
  1
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<div>
  1
</div>
```
## Change
```
UPDATE: button::text "" => "1"
```
