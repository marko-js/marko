# Render `{"big":false,"more":false,"label":"a"}`

# Update `{"big":false,"more":true,"label":"b"}`
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

# Update `{"big":false,"more":false,"label":"c"}`
## Change
```
REMOVE: section
```

# Update `{"big":true,"more":true,"label":"d"}`
```html
<section>
  <em>
    d
  </em>
</section>
```
## Change
```
INSERT: section
INSERT: section > em
UPDATE: section > em::text " " => "d"
```
