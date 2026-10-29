# Render `{"show":false,"big":false,"label":"initial"}`

# Update `{"show":true,"big":false,"label":"a"}`
```html
<button>
  clear
</button>
<section>
  <em>
    a
  </em>
</section>
```
## Change
```
INSERT: button, section
```

# Update `{"show":true,"big":false,"label":"b"}`
```html
<button>
  clear
</button>
<section>
  <em>
    b
  </em>
</section>
```
## Change
```
UPDATE: section > em::text "a" => "b"
```

# Update `{"show":true,"big":true,"label":"c"}`
```html
<button>
  clear
</button>
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
