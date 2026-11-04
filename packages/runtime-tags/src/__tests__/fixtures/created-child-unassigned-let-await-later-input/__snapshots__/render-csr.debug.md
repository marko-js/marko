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
<main />
```
## Change
```
REMOVE: main > div
```

# Update
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
INSERT: main > p
UPDATE: main > p::text " " => "2"
```

# Update `{"on":true,"n":3}`
