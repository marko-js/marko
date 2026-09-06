# Render `{"title":"Store"}`
```html
<main>
  <h1>
    Store
  </h1>
  <p>
    item a
  </p>
  <p>
    item b
  </p>
</main>
```

# Update `{"title":"Store!"}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    item a
  </p>
  <p>
    item b
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
UPDATE: main > p:nth-of-type(1)::text@5 "a" => "a"
UPDATE: main > p:nth-of-type(2)::text@5 "b" => "b"
```
