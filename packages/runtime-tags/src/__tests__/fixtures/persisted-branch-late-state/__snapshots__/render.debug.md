# Render `{"title":"a"}`
```html
<main>
  <s>
    none
  </s>
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
  <b>
    one
  </b>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > b
REMOVE: main > b + s
```

# Update `{"title":"b"}`

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
    +
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
    +
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
  <s>
    none
  </s>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > s
REMOVE: main > s + i
```
