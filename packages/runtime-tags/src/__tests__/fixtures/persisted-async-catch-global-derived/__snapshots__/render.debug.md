# Render `{"promise":{},"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    ok
  </em>
  <button>
    0
  </button>
</main>
```

# Update `{"promise":{},"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<main>
  <p>
    bmce!
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > p
REMOVE: main > p + em
UPDATE: main > p::text " " => "bmce!"
```
