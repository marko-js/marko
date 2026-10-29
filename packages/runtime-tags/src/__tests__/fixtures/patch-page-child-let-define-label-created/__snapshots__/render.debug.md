# Render `{"show":false,"more":true,"label":"a"}`

# Update `{"show":true,"more":true,"label":"b"}`
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
```

# Update `{"show":true,"more":true,"label":"c"}`
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
