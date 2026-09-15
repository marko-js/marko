# Render `{"title":"Store","show":true}`
```html
<main
  data-inserts="1"
>
  <h1>
    Store
  </h1>
  <p>
    promo
  </p>
</main>
```

# Update `{"title":"Store!","show":true}`
```html
<main
  data-inserts="1"
>
  <h1>
    Store!
  </h1>
  <p>
    promo
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
```

# Update `{"title":"Store!","show":false}`
```html
<main
  data-inserts="1"
>
  <h1>
    Store!
  </h1>
</main>
```
## Change
```
REMOVE: main > h1 + p
```

# Update `{"title":"Store!","show":true}`
```html
<main
  data-inserts="2"
>
  <h1>
    Store!
  </h1>
  <p>
    promo
  </p>
</main>
```
## Change
```
INSERT: main > h1 + p
UPDATE: main[data-inserts] "1" => "2"
```
