# Render `{"more":false,"label":"a"}`
```html
<div>
  js
</div>
```

# Update `{"more":true,"label":"b"}`
```html
<section>
  <em>
    b
  </em>
</section>
<div>
  js
</div>
```
## Change
```
INSERT: section
```

# Update `{"more":true,"label":"c"}`
```html
<section>
  <em>
    c
  </em>
</section>
<div>
  js
</div>
```
## Change
```
UPDATE: section > em::text "b" => "c"
```
