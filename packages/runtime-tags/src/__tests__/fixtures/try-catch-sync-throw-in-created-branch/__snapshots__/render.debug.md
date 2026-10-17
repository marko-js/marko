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
INSERT: button + :is(::text("caught "), ::text("if body"))
INSERT: ::text@7 + ::text(" ")
INSERT: ::text(" ")
INSERT: ::text(" ")
UPDATE: ::text@7 "" => "if body"
INSERT: ::text@7 + :is(::text("caught "), ::text("try body"))
REMOVE: ::text@21 + ::text(" ")
INSERT: ::text(" ")
REMOVE: ::text + ::text(" ")
INSERT: ::text(" ")
REMOVE: ::text + ::text(" ")
UPDATE: ::text@21 "" => "try body"
INSERT: ::text@21 + :is(::text("outer caught "), ::text("catch"))
REMOVE: ::text@42 + ::text(" ")
INSERT: ::text@42 + :is(::text("outer caught "), ::text("catch of try body"))
REMOVE: ::text@60 + ::text(" ")
UPDATE: ::text@42 "" => "catch"
UPDATE: ::text@60 "" => "catch of try body"
```
