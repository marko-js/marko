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
    title: a
  </p>
  <button>
    show
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text@7 "" => "a"
UPDATE: main > p::text@0 "" => "title"
```

# Update `{"title":"b"}`
```html
<main>
  <p>
    title: b
  </p>
  <button>
    show
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@7 "a" => "b"
```
