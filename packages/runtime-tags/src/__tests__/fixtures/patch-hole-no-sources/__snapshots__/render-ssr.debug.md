# Render `{"title":"a","show":false}`
```html
<main>
  <p>
    1
  </p>
  <h1>
    a
  </h1>
</main>
```

# Update `{"title":"b","show":false}`
```html
<main>
  <p>
    1
  </p>
  <h1>
    b
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "a" => "b"
```

# Update `{"title":"c","show":true}`
```html
<main>
  <p>
    1
  </p>
  <h1>
    c
  </h1>
  <span>
    4
  </span>
</main>
```
## Change
```
UPDATE: main > h1::text "b" => "c"
INSERT: main > h1 + span
```
