# Render `{"content":"div"}`
```html
<main>
  <div />
  <button>
    0
  </button>
</main>
```

# Update `{"content":"span"}`
```html
<main>
  <span />
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > span
REMOVE: main > span + div
```
