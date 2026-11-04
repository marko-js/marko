# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<section>
  <em>
    static b
  </em>
</section>
```
## Change
```
INSERT: section
```

# Update `{"show":true,"label":"c"}`
```html
<section>
  <em>
    static c
  </em>
</section>
```
## Change
```
UPDATE: section > em::text@7 "b" => "c"
```
