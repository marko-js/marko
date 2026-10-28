# Render `{"title":"a","open":true}`
```html
<main>
  <em>
    a
  </em>
  <strong>
    a
  </strong>
  <button>
    +
  </button>
</main>
```

# Update `{"title":"b","open":false}`
```html
<main>
  <em>
    b
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > em + strong
UPDATE: main > em::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > em
```

# Update `{"title":"c","open":true}`
```html
<main>
  <strong>
    c
  </strong>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > strong
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    c
  </em>
  <strong>
    c
  </strong>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text " " => "c"
```

# Update `{"title":"d","open":true}`
```html
<main>
  <em>
    d
  </em>
  <strong>
    d
  </strong>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > strong::text "c" => "d"
UPDATE: main > em::text "c" => "d"
```
