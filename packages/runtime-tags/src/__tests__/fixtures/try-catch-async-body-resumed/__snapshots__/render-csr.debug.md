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
UPDATE: button::text@0 "" => "ready"
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
