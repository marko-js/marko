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
UPDATE: p::text "a" => "b"
INSERT: section
```

# Update `{"show":false,"label":"c"}`
```html
<p>
  c
</p>
```
## Change
```
UPDATE: p::text "b" => "c"
REMOVE: section
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
UPDATE: p::text "c" => "d"
INSERT: section
```
