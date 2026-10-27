# Render `{"name":"a","$global":{"brand":"Marko","serializedGlobals":[]}}`
```html
<main>
  <h1>
    Marko
  </h1>
  <h2>
    Marko
  </h2>
  <p>
    a
  </p>
</main>
```

# Update `{"name":"b","$global":{"brand":"Runtime","serializedGlobals":[]}}`
```html
<main>
  <h1>
    Runtime
  </h1>
  <h2>
    Runtime
  </h2>
  <p>
    b
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Marko" => "Runtime"
UPDATE: main > h2::text "Marko" => "Runtime"
UPDATE: main > p::text "a" => "b"
```
