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
REMOVE: ::text("loading")
INSERT: button
INSERT: button::text("inner ")
INSERT: button::text("0")
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
REMOVE: button
INSERT: ::text("caught "), ::text("bang")
UPDATE: ::text@7 "" => "bang"
UPDATE: button::text@6 "0" => "1"
```
