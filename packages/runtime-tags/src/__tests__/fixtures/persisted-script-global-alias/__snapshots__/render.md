# Render `{"$global":{"brand":"acme"}}`
```html
<main
  data-brand="acme"
>
  <h1>
    acme
  </h1>
</main>
```

# Update `{"$global":{"brand":"bmce"}}`
```html
<main
  data-brand="bmce"
>
  <h1>
    bmce
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "acme" => "bmce"
UPDATE: main[data-brand] "acme" => "bmce"
```
