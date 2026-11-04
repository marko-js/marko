# Render `{"title":"a"}`
```html
<main>
  <button>
    show
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
    a
  </p>
  <button>
    show
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "a"
```

# Update `{"title":"b"}`
```html
<main>
  <p>
    b
  </p>
  <button>
    show
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "a" => "b"
```
