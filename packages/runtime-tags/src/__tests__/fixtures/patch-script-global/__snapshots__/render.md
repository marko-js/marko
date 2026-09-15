# Render `{"$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[Marko]"
>
  <h1>
    Marko
  </h1>
</main>
```

# Update `{"$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
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
```

# Update `{"$global":{"brand":"Runtime","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[Marko][Runtime]"
>
  <h1>
    Runtime
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "Marko" => "Runtime"
UPDATE: main[data-log] "[Marko]" => "[Marko][Runtime]"
```
