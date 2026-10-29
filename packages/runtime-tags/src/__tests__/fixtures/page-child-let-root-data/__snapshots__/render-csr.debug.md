# Render `{"more":false,"label":"a"}`
```html
<section>
  <em>
    a
  </em>
</section>
```

# Update `{"more":true,"label":"b"}`
```html
<p>
  has
</p>
<section>
  <em>
    b
  </em>
</section>
```
## Change
```
INSERT: p
UPDATE: section > em::text "a" => "b"
UPDATE: p::text " " => "has"
```

# Update `{"more":false,"label":"c"}`
```html
<section>
  <em>
    c
  </em>
</section>
```
## Change
```
REMOVE: p
UPDATE: section > em::text "b" => "c"
```
