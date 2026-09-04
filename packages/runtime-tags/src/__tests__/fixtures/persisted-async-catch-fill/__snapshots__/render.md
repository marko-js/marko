# Render `{"title":"first","promise":{}}`
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

# Update `{"title":"second","promise":{}}`
```html
<main>
  <p>
    second boom
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
UPDATE: main > p::text@0 "" => "second"
```
