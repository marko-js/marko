# Render `{"name":"n","$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
```html
<main>
  <button>
    t
  </button>
  <p>
    Marko
  </p>
  <b>
    n:Marko
  </b>
</main>
```

# Update `{"name":"n","$global":{"brand":"Next","serializedGlobals":["brand"]}}`
```html
<main>
  <button>
    t
  </button>
  <p>
    Next
  </p>
  <b>
    n:Next
  </b>
</main>
```
## Change
```
UPDATE: main > p::text "Marko" => "Next"
UPDATE: main > b::text "n:Marko" => "n:Next"
```
