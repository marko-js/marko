# Render `{"to":3}`
```html
<div>
  0, 1, 2, 3, 
</div>
```

# Update `{"from":4,"to":6}`
```html
<div>
  4, 5, 6, 
</div>
```
## Change
```
REMOVE: div > :is(::text("0"), ::text(", "), ::text("1"), ::text(", "), ::text("2"), ::text(", "), ::text("3"), ::text(", "))
INSERT: div > :is(::text("4"), ::text(", "))
INSERT: div::text@1 + :is(::text("5"), ::text(", "))
INSERT: div::text@4 + :is(::text("6"), ::text(", "))
UPDATE: div::text@0 "" => "4"
UPDATE: div::text@3 "" => "5"
UPDATE: div::text@6 "" => "6"
```

# Update `{"from":7,"to":16,"step":3}`
```html
<div>
  7, 10, 13, 16, 
</div>
```
## Change
```
REMOVE: div > :is(::text("4"), ::text(", "), ::text("5"), ::text(", "), ::text("6"), ::text(", "))
INSERT: div > :is(::text("7"), ::text(", "))
INSERT: div::text@1 + :is(::text("10"), ::text(", "))
INSERT: div::text@5 + :is(::text("13"), ::text(", "))
INSERT: div::text@9 + :is(::text("16"), ::text(", "))
UPDATE: div::text@0 "" => "7"
UPDATE: div::text@3 "" => "10"
UPDATE: div::text@7 "" => "13"
UPDATE: div::text@11 "" => "16"
```

# Update `{"from":0,"to":-1,"step":-0.3}`
```html
<div>
  0, -0.3, -0.6, -0.8999999999999999, 
</div>
```
## Change
```
REMOVE: div > :is(::text("7"), ::text(", "), ::text("10"), ::text(", "), ::text("13"), ::text(", "), ::text("16"), ::text(", "))
INSERT: div > :is(::text("0"), ::text(", "))
INSERT: div::text@1 + :is(::text("-0.3"), ::text(", "))
INSERT: div::text@7 + :is(::text("-0.6"), ::text(", "))
INSERT: div::text@13 + :is(::text("-0.8999999999999999"), ::text(", "))
UPDATE: div::text@0 "" => "0"
UPDATE: div::text@3 "" => "-0.3"
UPDATE: div::text@9 "" => "-0.6"
UPDATE: div::text@15 "" => "-0.8999999999999999"
```

# Update `{"from":0,"to":3,"step":0.5}`
```html
<div>
  0, 0.5, 1, 1.5, 2, 2.5, 3, 
</div>
```
## Change
```
REMOVE: div::text@1 + ::text("-0.3")
REMOVE: div::text@1 + ::text(", ")
REMOVE: div::text@1 + ::text("-0.6")
REMOVE: div::text@1 + ::text(", ")
REMOVE: div::text@1 + ::text("-0.8999999999999999")
REMOVE: div::text@1 + ::text(", ")
INSERT: div::text@1 + :is(::text("3"), ::text(", "))
INSERT: div::text@1 + :is(::text("2.5"), ::text(", "))
INSERT: div::text@1 + :is(::text("2"), ::text(", "))
INSERT: div::text@1 + :is(::text("1.5"), ::text(", "))
INSERT: div::text@1 + :is(::text("1"), ::text(", "))
INSERT: div::text@1 + :is(::text("0.5"), ::text(", "))
UPDATE: div::text@3 "" => "0.5"
UPDATE: div::text@8 "" => "1"
UPDATE: div::text@11 "" => "1.5"
UPDATE: div::text@16 "" => "2"
UPDATE: div::text@19 "" => "2.5"
UPDATE: div::text@24 "" => "3"
```
