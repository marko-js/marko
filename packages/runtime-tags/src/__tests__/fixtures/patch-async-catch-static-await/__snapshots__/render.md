# Render `{"label":"a"}`
```html
<main>
  <p>
    a
  </p>
  <p>
    oops
  </p>
</main>
```

# Update `{"label":"b"}`
```html
<main>
  <p>
    b
  </p>
  <p>
    oops
  </p>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(1)::text "a" => "b"
REMOVE: main > p
INSERT: main > p:nth-of-type(1) + p
```
