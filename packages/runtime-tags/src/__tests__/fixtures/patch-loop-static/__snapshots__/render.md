# Render `{"title":"Store","note":"new"}`
```html
<main>
  <h1>
    Store
  </h1>
  <p>
    a new
  </p>
  <p>
    b new
  </p>
</main>
```

# Update `{"title":"Store!","note":"sale"}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    a sale
  </p>
  <p>
    b sale
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
UPDATE: main > p:nth-of-type(1)::text@0 "a" => "a"
UPDATE: main > p:nth-of-type(1)::text@2 "new" => "sale"
UPDATE: main > p:nth-of-type(2)::text@0 "b" => "b"
UPDATE: main > p:nth-of-type(2)::text@2 "new" => "sale"
```
