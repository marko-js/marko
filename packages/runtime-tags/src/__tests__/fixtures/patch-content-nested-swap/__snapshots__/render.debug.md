# Render `{"show":false,"content":"div"}`
```html
<main>
  <button>
    0
  </button>
</main>
```

# Update `{"show":true,"content":"div"}`
```html
<main>
  <div />
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > div
```

# Update `{"show":true,"content":"div"}`

# Update `{"show":true,"content":"span"}`
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
