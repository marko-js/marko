# Render `{"promise":{"value":"hi"}}`
```html
<main>
  <p>
    loading
  </p>
  <button>
    0
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-ph="1"
>
  <p>
    loading
  </p>
  <b>
    ph 1
  </b>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
INSERT: main > p + b
UPDATE: main > b::text@3 "" => "1"
UPDATE: main[data-ph] null => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-ph="1"
>
  <p>
    loading
  </p>
  <b>
    ph 2
  </b>
  <button>
    2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "1" => "2"
UPDATE: main > b::text@3 "1" => "2"
```

# Update
```html
<main
  data-ph="1"
>
  <em>
    hi
  </em>
  <button>
    2
  </button>
</main>
```
## Change
```
INSERT: main > em::text("hi")
REMOVE: t > p + b
REMOVE: main > p
INSERT: main > em
```
