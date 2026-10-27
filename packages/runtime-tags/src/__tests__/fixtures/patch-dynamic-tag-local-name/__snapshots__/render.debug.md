# Render `{"title":"a","$global":{"brand":"x","serializedGlobals":["brand"]}}`
```html
<main>
  <h1>
    a
  </h1>
  <button>
    +
  </button>
  <i>
    A x
  </i>
</main>
```

# Update `{"title":"b","$global":{"brand":"y","serializedGlobals":["brand"]}}`
```html
<main>
  <h1>
    b
  </h1>
  <button>
    +
  </button>
  <i>
    A y
  </i>
</main>
```
## Change
```
UPDATE: main > h1::text "a" => "b"
UPDATE: main > i::text@2 "x" => "y"
```
