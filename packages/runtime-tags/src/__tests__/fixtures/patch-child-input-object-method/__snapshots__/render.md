# Render `{"text":"axbx"}`
```html
<div>
  a
  <b>
    cursor
  </b>
  b
  <b>
    cursor
  </b>
</div>
```

# Update `{"text":"xa"}`
```html
<div>
  <b>
    cursor
  </b>
  a
</div>
```
## Change
```
INSERT: div > :is(b, ::text("a"))
REMOVE: div::text + ::text("a")
REMOVE: div::text + b
REMOVE: div::text + ::text("b")
REMOVE: div::text + b
```
