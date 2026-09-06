# Render `{"label":"first","promise":{}}`
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

# Update `{"label":"second","promise":{}}`
```html
<main>
  <em>
    slow
  </em>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > p
REMOVE: p + em
INSERT: main > em
REMOVE: main > em + p
```
