# Render `{"show":false,"label":"a"}`
```html
<main />
```

# Update `{"show":true,"label":"a"}`
```html
<main>
  <span>
    a
  </span>
  <p>
    a!
  </p>
</main>
```
## Change
```
INSERT: main > :is(span, p)
```

# Update `{"show":true,"label":"b"}`
```html
<main>
  <span>
    b
  </span>
  <p>
    b!
  </p>
</main>
```
## Change
```
UPDATE: main > span::text "a" => "b"
UPDATE: main > p::text "a!" => "b!"
```
