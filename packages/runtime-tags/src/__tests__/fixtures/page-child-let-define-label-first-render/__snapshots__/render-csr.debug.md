# Render `{"more":false,"label":"a"}`

# Update `{"more":true,"label":"b"}`
```html
<section>
  <em>
    b
  </em>
</section>
```
## Change
```
INSERT: section
INSERT: section > em
UPDATE: section > em::text " " => "b"
```

# Update `{"more":true,"label":"c"}`
```html
<section>
  <em>
    c
  </em>
</section>
```
## Change
```
UPDATE: section > em::text "b" => "c"
```
