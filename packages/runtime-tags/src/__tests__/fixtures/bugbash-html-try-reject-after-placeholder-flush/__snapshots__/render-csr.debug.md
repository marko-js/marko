# Render
```html
beforea  b  cafter
```

# Update
```html
beforeLOADINGafter
```
## Change
```
INSERT: ::text@0 + ::text("LOADING")
REMOVE: ::text@6 + ::text("a ")
REMOVE: ::text@6 + ::text(" b ")
REMOVE: ::text@6 + ::text(" c")
```

# Update
```html
beforeLOADINGafterouter
```
## Change
```
INSERT: ::text@13 + ::text("outer")
UPDATE: ::text@18 " " => "outer"
```

# Update
```html
beforeCAUGHT:boomafterouter
```
## Change
```
INSERT: ::text@0 + :is(::text("CAUGHT:"), ::text("boom"))
REMOVE: ::text@13 + ::text("LOADING")
UPDATE: ::text@13 "" => "boom"
```
