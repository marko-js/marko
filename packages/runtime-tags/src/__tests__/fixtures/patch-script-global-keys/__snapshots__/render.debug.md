# Render `{"$global":{"brand":"Marko","locale":"en","other":"x","serializedGlobals":["brand","locale","other"]}}`
```html
<main
  data-log="[Marko:en]"
>
  <h1>
    x
  </h1>
</main>
```

# Update `{"$global":{"brand":"Marko","locale":"en","other":"y","serializedGlobals":["brand","locale","other"]}}`
```html
<main
  data-log="[Marko:en]"
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

# Update `{"$global":{"brand":"Marko","locale":"fr","other":"y","serializedGlobals":["brand","locale","other"]}}`
```html
<main
  data-log="[Marko:en][Marko:fr]"
>
  <h1>
    y
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "y" => "y"
UPDATE: main[data-log] "[Marko:en]" => "[Marko:en][Marko:fr]"
```

# Update `{"$global":{"brand":"Fresh","locale":"fr","other":"y","serializedGlobals":["brand","locale","other"]}}`
```html
<main
  data-log="[Marko:en][Marko:fr][Fresh:fr]"
>
  <h1>
    y
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "y" => "y"
UPDATE: main[data-log] "[Marko:en][Marko:fr]" => "[Marko:en][Marko:fr][Fresh:fr]"
```
