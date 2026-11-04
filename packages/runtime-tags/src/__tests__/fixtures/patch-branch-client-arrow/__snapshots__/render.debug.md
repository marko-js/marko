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
    t:a
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "t:a"
```

# Update `{"title":"b"}`
```html
<main>
  <p>
    t:b
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "t:a" => "t:b"
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

# Update `{"title":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    t:c
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "t:c"
```
