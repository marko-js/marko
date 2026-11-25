# Render
```html
<div>
  <button>
    0
  </button>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
caught bang
```
## Change
```
REMOVE: div
INSERT: ::text("caught "), ::text("bang")
UPDATE: ::text@7 "" => "bang"
UPDATE: div > button::text "0" => "1"
```
