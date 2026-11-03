# Render `{"p":{}}`
```html
<main>
  <em>
    2
  </em>
  <em>
    3
  </em>
  <button>
    interactive
  </button>
</main>
```

# Update `{"p":{"value":2}}`
```html
<main>
  <em>
    3
  </em>
  <em>
    4
  </em>
  <button>
    interactive
  </button>
</main>
```
## Change
```
REMOVE: main > em
REMOVE: main > em
INSERT: main > em
INSERT: main > em:nth-of-type(1) + em
```
