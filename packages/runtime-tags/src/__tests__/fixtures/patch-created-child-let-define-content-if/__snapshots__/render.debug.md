# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
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
INSERT: button, section
```

# Update `{"show":true,"label":"c"}`
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

# Update `{"show":true,"label":"d"}`
```html
<button>
  clear
</button>
<section>
  <em>
    d
  </em>
</section>
```
## Change
```
UPDATE: section > em::text "c" => "d"
```
