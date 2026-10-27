# Render `{"title":"a"}`
```html
<main>
  <b>
    x:a
  </b>
  <i>
    y:a
  </i>
  <u>
    z:a
  </u>
  <button>
    +
  </button>
</main>
```

# Update `{"title":"b"}`
```html
<main>
  <b>
    x:b
  </b>
  <i>
    y:b
  </i>
  <u>
    z:b
  </u>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > b::text "x:a" => "x:b"
UPDATE: main > i::text "y:a" => "y:b"
UPDATE: main > u::text "z:a" => "z:b"
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
REMOVE: main > b
REMOVE: main > i
REMOVE: main > u
```

# Update `{"title":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <b>
    x:c
  </b>
  <i>
    y:c
  </i>
  <u>
    z:c
  </u>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > b
UPDATE: main > b::text " " => "x:c"
INSERT: main > b + i
UPDATE: main > i::text " " => "y:c"
INSERT: main > i + u
UPDATE: main > u::text " " => "z:c"
```
