# Render `{"items":[{"id":1,"promise":{}}]}`
```html
<main>
  <em>
    one
  </em>
  <button>
    interactive
  </button>
</main>
```

# Update `{"items":[{"id":1,"promise":{"value":"uno"}},{"id":2,"promise":{"value":"dos"}}]}`
```html
<main>
  <em>
    uno
  </em>
  <em>
    dos
  </em>
  <button>
    interactive
  </button>
</main>
```
## Change
```
REMOVE: main > em
INSERT: main > em
INSERT: main > em:nth-of-type(1) + em
```
