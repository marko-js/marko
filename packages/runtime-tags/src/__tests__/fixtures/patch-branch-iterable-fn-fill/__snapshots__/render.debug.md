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
    a:1
  </p>
  <button>
    show
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text@2 "" => "1"
UPDATE: main > p::text@0 "" => "a"
```

# Update `{"title":"b"}`
```html
<main>
  <p>
    b:1
  </p>
  <button>
    show
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@0 "a" => "b"
```
