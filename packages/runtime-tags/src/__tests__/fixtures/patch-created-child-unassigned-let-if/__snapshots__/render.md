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
     1
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
     2
  </p>
</main>
```
## Change
```
REMOVE: main > p + div
INSERT: main > p
```
