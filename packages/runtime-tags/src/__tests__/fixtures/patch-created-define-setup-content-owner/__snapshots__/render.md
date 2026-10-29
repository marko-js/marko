# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<section>
  <button>
    0
  </button>
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
  <button>
    0
  </button>
  <em>
    static c
  </em>
</section>
```
## Change
```
UPDATE: section > em::text@7 "b" => "c"
```

# Update `{"show":true,"label":"d"}`
```html
<section>
  <button>
    0
  </button>
  <em>
    static d
  </em>
</section>
```
## Change
```
UPDATE: section > em::text@7 "c" => "d"
```
