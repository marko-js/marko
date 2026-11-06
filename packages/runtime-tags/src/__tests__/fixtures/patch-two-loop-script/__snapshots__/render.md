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
REMOVE: main > p + p
UPDATE: main > p::text "a" => "b"
UPDATE: body[data-label] "a" => "b"
```
