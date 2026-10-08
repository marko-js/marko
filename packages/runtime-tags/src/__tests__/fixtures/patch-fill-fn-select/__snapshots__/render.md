# Render `{"title":"a","upper":false}`
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
    la
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "la"
```

# Update `{"title":"b","upper":true}`
```html
<main>
  <p>
    Ub
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "la" => "Ub"
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
```

# Update `{"title":"c","upper":false}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    lc
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "lc"
```
