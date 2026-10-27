# Render `{"x":"p","y":"q","show":true}`
```html
<p>
  qp!
</p>
<div>
  s:p!
</div>
```

# Update `{"x":"r","y":"s","show":true}`
```html
<p>
  sr!
</p>
<div>
  s:r!
</div>
```
## Change
```
UPDATE: p::text "qp!" => "sr!"
REMOVE: div::text("s:p!")
INSERT: div::text("s:r!")
```

# Update `{"x":"t","y":"u","show":true}`
```html
<p>
  ut!
</p>
<div>
  s:t!
</div>
```
## Change
```
UPDATE: p::text "sr!" => "ut!"
REMOVE: div::text("s:r!")
INSERT: div::text("s:t!")
```
