# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<p>
  <b>
    a
  </b>
</p>
<div>
  <b>
    b
  </b>
</div>
```

# Update `{"items":[{"key":"b","on":false},{"key":"c","on":true}]}`
```html
<div>
  <b>
    b
  </b>
</div>
<p>
  <b>
    c
  </b>
</p>
```
## Change
```
INSERT: div
REMOVE: div + p
INSERT: div > b
UPDATE: div > b::text " " => "b"
INSERT: div + p
REMOVE: p + div
INSERT: p > b
UPDATE: p > b::text " " => "c"
```
