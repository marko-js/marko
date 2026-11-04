# Render `{"label":"a","$global":{"promise":{}}}`
```html
<main>
  <p>
    a
  </p>
  <em>
    static
  </em>
</main>
```

# Update `{"label":"b","$global":{"promise":{}}}`
```html
<main>
  <p>
    b
  </p>
  <s>
    caught
  </s>
</main>
```
## Change
```
UPDATE: main > p::text "a" => "b"
INSERT: main > p + s
REMOVE: main > s + em
```
