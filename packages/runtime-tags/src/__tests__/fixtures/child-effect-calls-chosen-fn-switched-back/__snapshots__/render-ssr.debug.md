# Render `{"x":"1","pick":true}`
```html
<main
  data-a="1"
  data-last="new"
>
  <span>
    1
  </span>
  <p>
    0
  </p>
</main>
```

# Update
```html
<main
  data-a="1"
  data-last="new"
>
  <span>
    1
  </span>
  <p>
    1
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "0" => "1"
```
