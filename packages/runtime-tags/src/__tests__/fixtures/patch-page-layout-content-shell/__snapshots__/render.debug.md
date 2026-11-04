# Render `{"label":"a"}`
```html
<main>
  <p>
    a 0
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
  <p>
    a 1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@2 "0" => "1"
```

# Update `{"label":"b"}`
```html
<main>
  <p>
    b 1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@0 "a" => "b"
```
