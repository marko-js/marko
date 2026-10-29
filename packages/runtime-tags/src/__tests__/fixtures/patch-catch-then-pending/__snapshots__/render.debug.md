# Render `{"promise":{},"detail":"a"}`
```html
<main>
  <span>
    ok
  </span>
  <button>
    0
  </button>
</main>
```

# Update `{"promise":{},"detail":"b"}`
```html
<main>
  <p>
    b
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
REMOVE: main > p + span
INSERT: main > p
UPDATE: main > p::text " " => "b"
```

# Update `{"promise":{"value":2},"detail":"c"}`
```html
<main>
  <p>
    c
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "b" => "c"
```
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
