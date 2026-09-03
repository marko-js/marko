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
UPDATE: div > button::text "0" => "1"
INSERT: div::text(" ")
INSERT: ::text("caught "), ::text("bang")
REMOVE: ::text@7 + div
UPDATE: ::text@7 "" => "bang"
```
