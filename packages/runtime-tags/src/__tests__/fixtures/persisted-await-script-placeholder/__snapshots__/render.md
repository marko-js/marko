# Render `{"promise":{"value":"a"}}`
```html
<main
  data-seen="a"
>
  <span
    id="v"
  >
    a
  </span>
</main>
```

# Update `{"promise":{"value":"b"}}`
```html
<main
  data-seen="a"
>
  <span
    id="v"
  >
    b
  </span>
</main>
```
## Change
```
UPDATE: #v::text "a" => "b"
```
