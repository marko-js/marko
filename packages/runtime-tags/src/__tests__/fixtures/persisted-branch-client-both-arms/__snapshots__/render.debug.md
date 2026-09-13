# Render `{"title":"a"}`
```html
<main>
  <i>
    a
  </i>
  <button>
    toggle
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <b>
    a
  </b>
  <button>
    toggle
  </button>
</main>
```
## Change
```
INSERT: main > b
REMOVE: main > b + i
UPDATE: main > b::text " " => "a"
```

# Update `{"title":"b"}`
```html
<main>
  <b>
    b
  </b>
  <button>
    toggle
  </button>
</main>
```
## Change
```
UPDATE: main > b::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <i>
    b
  </i>
  <button>
    toggle
  </button>
</main>
```
## Change
```
INSERT: main > i
REMOVE: main > i + b
UPDATE: main > i::text " " => "b"
```

# Update `{"title":"c"}`
```html
<main>
  <i>
    c
  </i>
  <button>
    toggle
  </button>
</main>
```
## Change
```
UPDATE: main > i::text "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <b>
    c
  </b>
  <button>
    toggle
  </button>
</main>
```
## Change
```
INSERT: main > b
REMOVE: main > b + i
UPDATE: main > b::text " " => "c"
```
