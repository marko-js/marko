# Render

# Update
```html
<button>
  ready 0
</button>
```
## Change
```
INSERT: button
INSERT: button::text("ready ")
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
