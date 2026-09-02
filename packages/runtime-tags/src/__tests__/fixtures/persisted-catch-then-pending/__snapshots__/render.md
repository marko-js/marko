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
  <span>
    ok
  </span>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > span
REMOVE: main > span + p
REMOVE: main > span
INSERT: main > span
```
