# Render `{"title":"a"}`
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
    a
  </p>
  <button>
    +
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
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "a" => "b"
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

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    b
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "b"
```
