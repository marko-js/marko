# Render `{"more":false,"label":"a","wrap":true}`
```html
<div>
  <em>
    a
  </em>
</div>
```

# Update `{"more":true,"label":"b","wrap":true}`
```html
<section>
  <em>
    b
  </em>
</section>
<div>
  <em>
    b
  </em>
</div>
```
## Change
```
INSERT: section
UPDATE: div > em::text "a" => "b"
INSERT: section > em
UPDATE: section > em::text " " => "b"
```

# Update `{"more":true,"label":"c","wrap":true}`
```html
<section>
  <em>
    c
  </em>
</section>
<div>
  <em>
    c
  </em>
</div>
```
## Change
```
UPDATE: div > em::text "b" => "c"
UPDATE: section > em::text "b" => "c"
```
