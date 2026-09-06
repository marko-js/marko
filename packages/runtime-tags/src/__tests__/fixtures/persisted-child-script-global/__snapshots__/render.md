# Render `{"$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[Marko]"
>
  <span>
    Marko
  </span>
</main>
```

# Update `{"$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[Marko]"
>
  <span>
    Marko
  </span>
</main>
```
## Change
```
UPDATE: main > span::text "Marko" => "Marko"
```

# Update `{"$global":{"brand":"Runtime","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[Marko][Runtime]"
>
  <span>
    Runtime
  </span>
</main>
```
## Change
```
UPDATE: main > span::text "Marko" => "Runtime"
UPDATE: main[data-log] "[Marko]" => "[Marko][Runtime]"
```
