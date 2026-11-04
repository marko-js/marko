# Render `{"on":true,"$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    a
  </em>
</main>
```

# Update `{"on":true,"$global":{"brand":"b","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    b
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "a" => "b"
```

# Update `{"on":false,"$global":{"brand":"b","serializedGlobals":["brand"]}}`
```html
<main />
```
## Change
```
REMOVE: main > em
```

# Update `{"on":true,"$global":{"brand":"c","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    c
  </em>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text " " => "c"
```
