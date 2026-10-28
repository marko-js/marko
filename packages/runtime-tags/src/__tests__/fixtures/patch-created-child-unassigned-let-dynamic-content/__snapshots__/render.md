# Render `{"show":true,"label":"a"}`
```html
<section>
  <button>
    x
  </button>
  <em>
    static a
  </em>
</section>
```

# Update `{"show":true,"label":"b"}`
```html
<section>
  <button>
    x
  </button>
  <em>
    static b
  </em>
</section>
```
## Change
```
UPDATE: section > em::text@7 "a" => "b"
```

# Update `{"show":false,"label":"c"}`
## Change
```
REMOVE: section
```

# Update `{"show":true,"label":"d"}`
```html
<section>
  <button>
    x
  </button>
  <em>
    static d
  </em>
</section>
```
## Change
```
INSERT: section
```
