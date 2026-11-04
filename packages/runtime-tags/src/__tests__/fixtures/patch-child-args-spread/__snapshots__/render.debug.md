# Render `{"parts":["a"]}`
```html
<main>
  <em>
    a
  </em>
  <button>
    t
  </button>
</main>
```

# Update `{"parts":["b"]}`
```html
<main>
  <em>
    b
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main > em
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    b
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text "" => "b"
```

# Update `{"parts":["c"]}`
```html
<main>
  <em>
    c
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "b" => "c"
```
