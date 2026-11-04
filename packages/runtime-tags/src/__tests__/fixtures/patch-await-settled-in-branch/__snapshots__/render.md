# Render `{"show":false,"label":"a"}`
```html
<p>
  a
</p>
```

# Update `{"show":true,"label":"b","value":"x"}`
```html
<section>
  <b>
    x
  </b>
</section>
<p>
  b
</p>
```
## Change
```
INSERT: section
UPDATE: p::text "a" => "b"
INSERT: section > b
```

# Update `{"show":false,"label":"c"}`
```html
<p>
  c
</p>
```
## Change
```
REMOVE: section
UPDATE: p::text "b" => "c"
```

# Update `{"show":true,"label":"d","value":{}}`
```html
<section>
  <b>
    y
  </b>
</section>
<p>
  d
</p>
```
## Change
```
INSERT: section
UPDATE: p::text "c" => "d"
INSERT: section > b
```
