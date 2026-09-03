# Render
```html
loading
```

# Update
```html
<button>
  inner 0
</button>
```
## Change
```
INSERT: button::text("inner ")
INSERT: button::text@0 + ::text("0")
REMOVE: ::text("loading")
INSERT: button
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
UPDATE: button::text@6 "0" => "1"
INSERT: ::text(" ")
INSERT: ::text("caught "), ::text("bang")
REMOVE: ::text@7 + ::text(" ")
REMOVE: ::text@7 + button
UPDATE: ::text@7 "" => "bang"
```
