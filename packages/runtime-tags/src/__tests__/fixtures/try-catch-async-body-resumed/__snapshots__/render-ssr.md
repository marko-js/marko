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
INSERT: button::text@0 + ::text("0")
```

# Update `click("button")`
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
