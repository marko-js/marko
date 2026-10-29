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
## Console
```
ERROR Error: A patch renders a value of the <let> "T" other than the one the page holds: its initial value changed.
```

## Patch rejected (navigate)
