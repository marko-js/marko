# Render `{"a":false}`
```html
<button>
  none
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  undefined:0
</button>
```
## Change
```
UPDATE: button::text "none" => "undefined:0"
```
