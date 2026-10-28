# Render `{"on":false,"n":0}`
```html
<button>
  0
</button>
<main>
  <div
    n="0"
  />
</main>
```

# Update `{"on":true,"n":1}`
```html
<button>
  0
</button>
<main>
  <p>
    <b>
      yes
    </b>
  </p>
</main>
```
## Change
```
REMOVE: main > p + div
INSERT: main > p
```

# Update `{"on":false,"n":1}`
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
## Change
```
INSERT: main > div
REMOVE: main > div + p
UPDATE: main > div[n] null => "1"
```

# Update `{"on":true,"n":0}`
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

# Update `{"on":false,"n":0}`
```html
<button>
  0
</button>
<main>
  <div
    n="0"
  />
</main>
```
## Change
```
INSERT: main > div
UPDATE: main > div[n] null => "0"
```

# Update `{"on":true,"n":2}`
```html
<button>
  0
</button>
<main>
  <p>
    <b>
      yes
    </b>
  </p>
</main>
```
## Change
```
REMOVE: main > p + div
INSERT: main > p
```
