# Render `{"promise":{"value":"a"}}`
```html
<main>
  <span>
    a
  </span>
</main>
```

# Update `{"promise":{"value":"b"}}`
```html
<main>
  <span>
    b
  </span>
</main>
```
## Change
```
UPDATE: main > span::text "a" => "b"
```
