# Render `{"native":false,"x":"a"}`
```html
<section>
  body a
</section>
```

# Update `{"native":true,"x":"b"}`
```html
<div>
  body b
</div>
```
## Change
```
INSERT: div
REMOVE: div + section
UPDATE: div::text@5 "" => "b"
```

# Update `{"native":true,"x":"c"}`
```html
<div>
  body c
</div>
```
## Change
```
UPDATE: div::text@5 "b" => "c"
```

# Update `{"native":false,"x":"d"}`
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
