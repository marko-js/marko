# Render `{"error":{},"label":"b"}`
```html
<b>
  SHOWN_x
</b>
<button>
  b:0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<b>
  SHOWN_x
</b>
<button>
  b:1
</button>
```
## Change
```
UPDATE: button::text@2 "0" => "1"
```
