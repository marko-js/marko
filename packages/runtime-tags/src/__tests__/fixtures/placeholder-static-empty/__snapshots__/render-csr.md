# Render `{"x":"a"}`
```html
<div>
  a
  <b />
  <i />
</div>
<div>
  <b />
  <i>
    a
  </i>
  <u />
</div>
```

# Update `{"x":"b"}`
```html
<div>
  b
  <b />
  <i />
</div>
<div>
  <b />
  <i>
    b
  </i>
  <u />
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "a" => "b"
UPDATE: div:nth-of-type(2) > i::text "a" => "b"
```
