# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
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
## Console
```
LOG "object"
```

# Update `{"show":true,"label":"c"}`
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
