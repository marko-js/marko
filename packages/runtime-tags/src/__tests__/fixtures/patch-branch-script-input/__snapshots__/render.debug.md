# Render `{"title":"Store","show":true,"value":"a"}`
```html
<main
  data-value="a"
>
  <h1>
    Store
  </h1>
  <p>
    promo
  </p>
</main>
```

# Update `{"title":"Store","show":true,"value":"b"}`
```html
<main
  data-value="b"
>
  <h1>
    Store
  </h1>
  <p>
    promo
  </p>
</main>
```
## Change
```
UPDATE: main[data-value] "a" => "b"
```

# Update `{"title":"Store","show":false,"value":"c"}`
```html
<main
  data-value="b"
>
  <h1>
    Store
  </h1>
</main>
```
## Change
```
REMOVE: main > h1 + p
```

# Update `{"title":"Store","show":true,"value":"d"}`
```html
<main
  data-value="d"
>
  <h1>
    Store
  </h1>
  <p>
    promo
  </p>
</main>
```
## Change
```
INSERT: main > h1 + p
UPDATE: main[data-value] "b" => "d"
```
