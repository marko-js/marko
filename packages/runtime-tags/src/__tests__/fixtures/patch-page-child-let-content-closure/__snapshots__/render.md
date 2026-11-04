# Render `{"label":"a"}`
```html
<section>
  <button>
    clear
  </button>
  <em>
    static a
  </em>
</section>
```

# Update `{"label":"b"}`
```html
<section>
  <button>
    clear
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
