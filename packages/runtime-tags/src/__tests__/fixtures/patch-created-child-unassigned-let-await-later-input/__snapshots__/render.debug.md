# Render `{"on":false,"n":1}`
```html
<button>
  0
</button>
<main>
  <div
    n="1"
  />
</main>
```

# Update `{"on":true,"n":2}`
```html
<button>
  0
</button>
<main>
  <p>
    2
  </p>
</main>
```
## Change
```
REMOVE: main > p + div
INSERT: main > p
```

# Update `{"on":true,"n":3}`
