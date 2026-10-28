# Render `{"promise":{}}`
```html
<main>
  <em>
    ok
  </em>
  <p>
    ok
  </p>
  <button>
    0
  </button>
</main>
```

# Update `{"promise":{},"error":{}}`
```html
<main>
  <b>
    SHOWN_message1
  </b>
  <i>
    SHOWN_code2
  </i>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > b + i
REMOVE: main > i + p
UPDATE: main > i::text " " => "SHOWN_code2"
INSERT: main > b
REMOVE: main > b + em
UPDATE: main > b::text " " => "SHOWN_message1"
```
