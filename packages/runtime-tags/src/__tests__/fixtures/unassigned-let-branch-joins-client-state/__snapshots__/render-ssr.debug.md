# Render `{"show":true,"w":"1"}`
```html
<button>
  0
</button>
<p>
  1
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  1
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
```
