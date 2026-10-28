# Render `{"title":"a"}`
```html
<main>
  <span>
    fmt
  </span>
  <p>
    [a] 0
  </p>
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
    fmt
  </span>
  <p>
    [a] 1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@4 "0" => "1"
```

# Update `{"title":"b"}`
```html
<main>
  <span>
    fmt
  </span>
  <p>
    [b] 1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@0 "[a]" => "[b]"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <span>
    fmt
  </span>
  <p>
    [b] 2
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
