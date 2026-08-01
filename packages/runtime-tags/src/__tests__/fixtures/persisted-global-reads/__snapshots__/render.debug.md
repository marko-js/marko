# Render `{"name":"first","$global":{"brand":"Marko","locale":"en"}}`
```html
<div>
  <h1
    title="en"
  >
    Marko
  </h1>
  <p>
    first
  </p>
</div>
```

# Update `{"name":"second","$global":{"brand":"Runtime","locale":"fr"}}`
```html
<div>
  <h1
    title="fr"
  >
    Runtime
  </h1>
  <p>
    second
  </p>
</div>
```
## Change
```
UPDATE: div > h1[title] "en" => "fr"
UPDATE: div > h1::text "Marko" => "Runtime"
UPDATE: div > p::text "first" => "second"
```
