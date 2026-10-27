# Render `{"title":"a"}`
```html
<main>
  <span>
    x2
  </span>
  <em>
    2
  </em>
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
  <em>
    4
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "2" => "4"
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
  <em>
    6
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "4" => "6"
```
