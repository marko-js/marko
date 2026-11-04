# Render `{"promise":{"value":"hi"}}`
```html
<main>
  <button>
    0
  </button>
</main>
```

# Update
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
## Change
```
INSERT: main > p
```

# Update
```html
<main>
  <em>
    hi
  </em>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > em
REMOVE: main > em + p
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    hi
  </em>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
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
UPDATE: main > button::text "1" => "2"
```
