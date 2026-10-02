# Render
```html
<span>
  x
</span>
```

# Update
```html
<span>
  x
</span>
<span>
  x
</span>
```
## Change
```
INSERT: span:nth-of-type(1) + span
```

# Update
```html
<span>
  x
</span>
caught ERROR!
```
## Change
```
INSERT: span + :is(::text("caught "), ::text("ERROR!"))
REMOVE: ::text@7 + span
UPDATE: ::text@7 "" => "ERROR!"
```

# Update
```html
<span>
  x
</span>
acaught ERROR!
```
## Change
```
INSERT: span + ::text("a")
UPDATE: ::text@0 " " => "a"
```
