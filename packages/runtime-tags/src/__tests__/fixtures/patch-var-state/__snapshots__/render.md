# Render `{"title":"a"}`
```html
<main>
  <span>
    x2
  </span>
  <p>
    2
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
    x2
  </span>
  <p>
    4
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "2" => "4"
```

# Update `{"title":"b"}`

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
    6
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "4" => "6"
```
