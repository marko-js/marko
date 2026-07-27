# Render `{"value":1}`
```html
<span>
  0
</span>
<button>
  Inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  1
</span>
<button>
  Inc
</button>
```
## Change
```
UPDATE: span::text "0" => "1"
```
