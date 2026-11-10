# Render `{"on":true,"note":"a"}`
```html
<p>
  <em>
    a
  </em>
</p>
```

# Update `{"on":false,"note":"b"}`
```html
<div>
  <em>
    b
  </em>
</div>
```
## Change
```
INSERT: div
REMOVE: div + p
INSERT: div > em
UPDATE: div > em::text " " => "b"
```

# Update `{"on":true,"note":"c"}`
```html
<p>
  <em>
    c
  </em>
</p>
```
## Change
```
INSERT: p
REMOVE: p + div
INSERT: p > em
UPDATE: p > em::text " " => "c"
```
