# Render `{"promise":{"value":"hi"},"$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<main>
  <p>
    0a
  </p>
  <button>
    0
  </button>
</main>
```

# Update
```html
<main>
  <em>
    hi
  </em>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > em::text("hi")
REMOVE: main > p
INSERT: main > em
```

# Update `{"promise":{"value":"ho"},"$global":{"brand":"b","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    ho
  </em>
  <button>
    0
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "hi" => "ho"
```
