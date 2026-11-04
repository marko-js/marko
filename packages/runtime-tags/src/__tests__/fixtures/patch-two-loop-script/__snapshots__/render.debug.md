# Render `{"title":"a","items":[1],"items2":[1,2]}`
```html
<main>
  <p>
    a
  </p>
  <p>
    a
  </p>
</main>
```

# Update `{"title":"b","items":[1],"items2":[1]}`
```html
<main>
  <p>
    b
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "a" => "b"
REMOVE: main > p + p
UPDATE: body[data-label] "a" => "b"
```
