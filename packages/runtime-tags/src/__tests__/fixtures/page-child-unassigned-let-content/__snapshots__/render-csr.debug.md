# Render `{"label":"a"}`
```html
<section>
  <em>
    static
  </em>
  <p>
    a
  </p>
</section>
```

# Update `{"label":"b"}`
```html
<section>
  <em>
    static
  </em>
  <p>
    b
  </p>
</section>
```
## Change
```
UPDATE: section > p::text "a" => "b"
```
