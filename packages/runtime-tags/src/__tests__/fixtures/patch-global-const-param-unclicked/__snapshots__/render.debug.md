# Render `{"$global":{"flag":"1","mark":"x","serializedGlobals":["flag","mark"]}}`
```html
<main>
  <p>
    01x
  </p>
  <button>
    0
  </button>
</main>
```

# Update `{"$global":{"flag":"1","mark":"y","serializedGlobals":["flag","mark"]}}`
```html
<main>
  <p>
    01y
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "01x" => "01y"
```

# Update `{"$global":{"flag":"2","mark":"z","serializedGlobals":["flag","mark"]}}`
```html
<main>
  <p>
    02z
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "01y" => "02z"
```
