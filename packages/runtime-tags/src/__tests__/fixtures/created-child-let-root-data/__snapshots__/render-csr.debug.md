# Render `{"show":false,"more":true,"label":"a"}`

# Update `{"show":true,"more":true,"label":"b"}`
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
INSERT: section
INSERT: p
INSERT: section > em
UPDATE: section > em::text " " => "b"
UPDATE: p::text " " => "has"
```

# Update `{"show":true,"more":false,"label":"c"}`
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

# Update `{"show":true,"more":true,"label":"d"}`
```html
<p>
  has
</p>
<section>
  <em>
    d
  </em>
</section>
```
## Change
```
INSERT: p
UPDATE: section > em::text "c" => "d"
UPDATE: p::text " " => "has"
```
