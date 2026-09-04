# Render `{"items":["a","b"]}`
```html
<main>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    a
  </p>
  <p>
    b
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
INSERT: main > p:nth-of-type(1) + p
```

# Update `{"items":["a","b","c"]}`
```html
<main>
  <p>
    a
  </p>
  <p>
    b
  </p>
  <p>
    c
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p:nth-of-type(2) + p
```

# Update `{"items":["z"]}`
```html
<main>
  <p>
    z
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "a" => "z"
REMOVE: main > p + p
REMOVE: main > p + p
```
