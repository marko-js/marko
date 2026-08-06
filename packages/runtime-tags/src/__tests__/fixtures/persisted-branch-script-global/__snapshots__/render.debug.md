# Render `{"show":true,"$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[Marko]"
>
  <h1>
    Marko
  </h1>
  <p>
    promo
  </p>
</main>
```

# Update `{"show":false,"$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[Marko]"
>
  <h1>
    Marko
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "Marko" => "Marko"
REMOVE: main > h1 + p
```

# Update `{"show":true,"$global":{"brand":"Fresh","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[Marko][Fresh]"
>
  <h1>
    Fresh
  </h1>
  <p>
    promo
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Marko" => "Fresh"
INSERT: main > h1 + p
UPDATE: main[data-log] "[Marko]" => "[Marko][Fresh]"
```

# Update `{"show":true,"$global":{"brand":"Patch","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[Marko][Fresh][Patch]"
>
  <h1>
    Patch
  </h1>
  <p>
    promo
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Fresh" => "Patch"
UPDATE: main[data-log] "[Marko][Fresh]" => "[Marko][Fresh][Patch]"
```
