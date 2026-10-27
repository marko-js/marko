# Render `{"a":{},"$global":{"signal":{}}}`
```html
<button>
  0
</button>
<em>
  wait
</em>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<em>
  wait
</em>
```
## Change
```
UPDATE: button::text "0" => "1"
```
