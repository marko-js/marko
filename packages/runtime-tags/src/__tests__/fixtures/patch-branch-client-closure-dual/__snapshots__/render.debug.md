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
  <p>
    p:a
  </p>
  <span>
    s:a
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
INSERT: main > p + span
UPDATE: main > p::text " " => "p:a"
UPDATE: main > span::text " " => "s:a"
```

# Update `{"title":"b"}`
```html
<main>
  <p>
    p:b
  </p>
  <span>
    s:b
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "p:a" => "p:b"
UPDATE: main > span::text "s:a" => "s:b"
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
REMOVE: main > p
REMOVE: main > span
```

# Update `{"title":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    p:c
  </p>
  <span>
    s:c
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
INSERT: main > p + span
UPDATE: main > p::text " " => "p:c"
UPDATE: main > span::text " " => "s:c"
```
