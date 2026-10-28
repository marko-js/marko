# Render `{"n":1}`
```html
<main>
  <span>
    x2
  </span>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"n":3}`
```html
<main>
  <span>
    x2
  </span>
  <p>
    big 1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > span + p
UPDATE: main > p::text@4 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <span>
    x2
  </span>
  <p>
    big 2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@4 "1" => "2"
```

# Update `{"n":1}`
```html
<main>
  <span>
    x2
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > span + p
```
