# Render `{"$global":{"brand":"Marko","other":"x","serializedGlobals":["brand","other"]}}`
```html
<main
  data-log="[Marko]"
>
  <h1>
    x
  </h1>
</main>
```

# Update `{"$global":{"brand":"Marko","other":"y","serializedGlobals":["brand","other"]}}`
```html
<main
  data-log="[Marko]"
>
  <h1>
    y
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "x" => "y"
```

# Update `{"$global":{"brand":"Marko","other":"y","serializedGlobals":["brand","other"]}}`
```html
<main
  data-log="[Marko]"
>
  <h1>
    y
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "y" => "y"
```
