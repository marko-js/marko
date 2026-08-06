# Render `{"show":true,"title":"Store","value":"a","$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[a:Marko]"
>
  <h1>
    Store
  </h1>
  <p>
    promo
  </p>
</main>
```

# Update `{"show":true,"title":"Store","value":"b","$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[a:Marko][b:Marko]"
>
  <h1>
    Store
  </h1>
  <p>
    promo
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
UPDATE: main[data-log] "[a:Marko]" => "[a:Marko][b:Marko]"
```

# Update `{"show":true,"title":"Store!","value":"b","$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[a:Marko][b:Marko]"
>
  <h1>
    Store!
  </h1>
  <p>
    promo
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
```

# Update `{"show":true,"title":"Store","value":"b","$global":{"brand":"Fresh","serializedGlobals":["brand"]}}`
```html
<main
  data-log="[a:Marko][b:Marko][b:Fresh]"
>
  <h1>
    Store
  </h1>
  <p>
    promo
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store"
UPDATE: main[data-log] "[a:Marko][b:Marko]" => "[a:Marko][b:Marko][b:Fresh]"
```
