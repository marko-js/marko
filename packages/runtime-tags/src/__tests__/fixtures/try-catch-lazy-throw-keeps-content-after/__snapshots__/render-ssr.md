# Render

# Update
```html
caught ERROR!
```
## Change
```
INSERT: ::text("caught ERROR!")
```

# Update
```html
caught ERROR!d
<p>
  after
</p>
```
## Change
```
INSERT: ::text@0 + ::text("d")
INSERT: ::text@13 + p
INSERT: p::text("after")
```
