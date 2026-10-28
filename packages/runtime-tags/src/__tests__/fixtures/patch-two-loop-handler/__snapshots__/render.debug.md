# Render `{"title":"a","items":[1],"items2":[1,2]}`
```html
<main>
  <button>
    1
  </button>
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
  <button>
    1
  </button>
  <p>
    b
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "a" => "b"
REMOVE: main > p + p
```
