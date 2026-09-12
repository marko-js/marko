# Render `{"text":"axbx","$global":{"theme":"t"}}`
```html
<div>
  a
  <b
    class="t"
  >
    cursor
  </b>
  b
  <b
    class="t"
  >
    cursor
  </b>
</div>
```

# Update `{"text":"xa","$global":{"theme":"t"}}`
```html
<span>
  <b
    class="t"
  >
    cursor
  </b>
  a
</span>
```
## Change
```
REMOVE: div
INSERT: span
```

# Update `{"text":"xaxb","$global":{"theme":"u"}}`
```html
<div>
  <b
    class="u"
  >
    cursor
  </b>
  a
  <b
    class="u"
  >
    cursor
  </b>
  b
</div>
```
## Change
```
REMOVE: span
INSERT: div
```
