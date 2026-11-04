# Render `{"title":"a"}`
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
```html
<main>
  <span>
    d:a
  </span>
  <p>
    n:a
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "n:a"
INSERT: main > span
UPDATE: main > span::text " " => "d:a"
```

# Update `{"title":"b"}`
```html
<main>
  <span>
    d:b
  </span>
  <p>
    n:b
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "n:a" => "n:b"
UPDATE: main > span::text "d:a" => "d:b"
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
REMOVE: main > span
REMOVE: main > p
```

# Update `{"title":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <span>
    d:c
  </span>
  <p>
    n:c
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "n:c"
INSERT: main > span
UPDATE: main > span::text " " => "d:c"
```
