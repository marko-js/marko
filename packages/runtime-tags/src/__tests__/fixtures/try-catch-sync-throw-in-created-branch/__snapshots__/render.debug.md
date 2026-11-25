# Render
```html
<button>
  show
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  show
</button>
caught if bodycaught try bodyouter caught catchouter caught catch of try body
```
## Change
```
INSERT: ::text(" ")
INSERT: ::text(" ")
INSERT: ::text(" ")
INSERT: ::text(" ")
INSERT: ::text(" ")
REMOVE: ::text(" ")
REMOVE: ::text(" ")
REMOVE: ::text(" ")
REMOVE: ::text(" ")
REMOVE: ::text(" ")
INSERT: ::text("caught "), ::text("if body")
UPDATE: ::text@7 "" => "if body"
INSERT: ::text("caught "), ::text("try body")
UPDATE: ::text@21 "" => "try body"
INSERT: ::text("outer caught "), ::text("catch")
UPDATE: ::text@42 "" => "catch"
INSERT: ::text("outer caught "), ::text("catch of try body")
UPDATE: ::text@60 "" => "catch of try body"
```
