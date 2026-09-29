# Render `{"x":"a"}`
```html
<main>
  <p>
    a
  </p>
  <em>
    static
  </em>
  <b>
    static
  </b>
</main>
```

# Update `{"x":"b"}`
```html
<main>
  <p>
    b
  </p>
  <em>
    static
  </em>
  <b>
    static
  </b>
</main>
```
## Change
```
UPDATE: main > p::text "a" => "b"
```

# Update `{"x":"c"}`
```html
<main>
  <p>
    c
  </p>
  <em>
    static
  </em>
  <b>
    static
  </b>
</main>
```
## Change
```
UPDATE: main > p::text "b" => "c"
```
