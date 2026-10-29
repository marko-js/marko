# Render `{"show":true,"big":false,"label":"a"}`
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

## Patch rejected (navigate)
