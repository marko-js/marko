# Render `{"show":false,"note":"a","nonce":"n1"}`
```html
<main>
  <p>
    a
  </p>
</main>
```

# Update `{"show":true,"note":"a","nonce":"n1"}`
```html
<main
  data-connected="true"
  data-nonce="n1"
  data-ran="1"
>
  <p>
    a
  </p>
</main>
```
## Change
```
UPDATE: main[data-ran] null => "1"
UPDATE: main[data-nonce] null => "n1"
UPDATE: main[data-connected] null => "true"
UPDATE: main > p::text "a" => "a"
```

# Update `{"show":true,"note":"b","nonce":"n1"}`
```html
<main
  data-connected="true"
  data-nonce="n1"
  data-ran="1"
>
  <p>
    b
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "a" => "b"
```

# Update `{"show":false,"note":"b","nonce":"n1"}`
```html
<main
  data-connected="true"
  data-nonce="n1"
  data-ran="1"
>
  <p>
    b
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "b" => "b"
```

# Update `{"show":true,"note":"b","nonce":"n2"}`
```html
<main
  data-connected="true"
  data-nonce="n2"
  data-ran="2"
>
  <p>
    b
  </p>
</main>
```
## Change
```
UPDATE: main[data-ran] "1" => "2"
UPDATE: main[data-nonce] "n1" => "n2"
UPDATE: main[data-connected] "true" => "true"
UPDATE: main > p::text "b" => "b"
```
