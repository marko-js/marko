# Render
```html
<div />
```

# Update
```html
<div>
  ABCD
</div>
```
## Change
```
INSERT: div > :is(::text("AB"), ::text("C"), ::text("D"))
UPDATE: div::text@2 "" => "C"
```
