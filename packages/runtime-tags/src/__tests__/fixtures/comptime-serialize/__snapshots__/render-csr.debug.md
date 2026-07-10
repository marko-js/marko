# Render `{"version":"v2.1"}`
```html
<div
  data-accent="#7df"
>
  <a
    href="/docs"
  >
    Docs
  </a>
  <p>
    shared
  </p>
  <p>
    marko began 1970
  </p>
  <p>
    compiler+runtime / 1000000000000000000000 / NaN,0,Infinity,-Infinity
  </p>
  <p>
    release
  </p>
  <p>
    same symbol
  </p>
  <p>
    https://markojs.com/docs
  </p>
</div>
```

# Update `{"version":"next"}`
```html
<div
  data-accent="#7df"
>
  <a
    href="/docs"
  >
    Docs
  </a>
  <p>
    shared
  </p>
  <p>
    marko began 1970
  </p>
  <p>
    compiler+runtime / 1000000000000000000000 / NaN,0,Infinity,-Infinity
  </p>
  <p>
    preview
  </p>
  <p>
    same symbol
  </p>
  <p>
    https://markojs.com/docs
  </p>
</div>
```
## Change
```
UPDATE: div > p:nth-of-type(4)::text "release" => "preview"
```
