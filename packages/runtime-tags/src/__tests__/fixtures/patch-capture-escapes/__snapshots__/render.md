# Render `{"name":"x","on":true,"flag":true}`
```html
<main>
  <h1>
    a&bx&lt;c
  </h1>
  <a
    data-x="on"
    title="a\"b"
  >
    x
  </a>
</main>
```

# Update `{"name":"y&z","on":false,"flag":false}`
```html
<main>
  <h1>
    a&by&z&lt;c
  </h1>
  <a
    title="c'd"
  >
    y&z
  </a>
</main>
```
## Change
```
UPDATE: main > h1::text "a&bx<c" => "a&by&z<c"
UPDATE: main > a[title] "a\"b" => "c'd"
UPDATE: main > a[data-x] "on" => null
UPDATE: main > a::text "x" => "y&z"
```
