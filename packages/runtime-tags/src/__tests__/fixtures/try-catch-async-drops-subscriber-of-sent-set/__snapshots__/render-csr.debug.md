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
INSERT: span:nth-of-type(2)
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
REMOVE: span
INSERT: ::text("caught "), ::text("ERROR!")
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
INSERT: ::text("a")
UPDATE: ::text@0 " " => "a"
```
