# Render
```html
<main>
  <p>
    ok
  </p>
  <p>
    ok
  </p>
  <button>
    0
  </button>
</main>
```

# Update `{"error":{}}`
```html
<main>
  <b>
    Error: SHOWN_message
  </b>
  <i>
    SHOWN_message
  </i>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > b
REMOVE: main > b + p
UPDATE: main > b::text " " => "Error: SHOWN_message"
INSERT: main > b + i
REMOVE: main > i + p
UPDATE: main > i::text " " => "SHOWN_message"
```
