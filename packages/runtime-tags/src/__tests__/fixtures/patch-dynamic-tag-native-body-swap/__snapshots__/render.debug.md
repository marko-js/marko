# Render `{"wrap":true,"x":"a"}`
```html
<section>
  body a
</section>
```

# Update `{"wrap":false,"x":"b"}`
```html
<div>
  body b
</div>
```
## Change
```
INSERT: div
REMOVE: div + section
INSERT: div > :is(::text("body "), ::text("b"))
UPDATE: div::text@5 "" => "b"
```

# Update `{"wrap":false,"x":"c"}`
```html
<div>
  body c
</div>
```
## Change
```
UPDATE: div::text@5 "b" => "c"
```

# Update `{"wrap":true,"x":"d"}`
```html
<section>
  body d
</section>
```
## Change
```
INSERT: section
REMOVE: section + div
INSERT: section > :is(::text("body "), ::text("d"))
UPDATE: section::text@5 "" => "d"
```
