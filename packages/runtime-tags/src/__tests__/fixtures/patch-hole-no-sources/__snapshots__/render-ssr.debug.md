# Render `{"title":"a","show":false}`
```html
<main>
  <p>
    1 x+y
  </p>
  <h1>
    a
  </h1>
  <i>
    x
  </i>
  <i>
    y
  </i>
</main>
```

# Update `{"title":"b","show":false}`
```html
<main>
  <p>
    1 x+y
  </p>
  <h1>
    b
  </h1>
  <i>
    x
  </i>
  <i>
    y
  </i>
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
    1 x+y
  </p>
  <h1>
    c
  </h1>
  <i>
    x
  </i>
  <i>
    y
  </i>
  <span>
    4 x+y
  </span>
  <b>
    x
  </b>
  <b>
    y
  </b>
</main>
```
## Change
```
UPDATE: main > h1::text "b" => "c"
INSERT: main > i:nth-of-type(2) + :is(span, b, b)
```
