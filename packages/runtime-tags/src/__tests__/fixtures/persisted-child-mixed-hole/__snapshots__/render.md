# Render `{"title":"a"}`
```html
<main>
  <p>
    a0
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
    a1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "a0" => "a1"
```

# Update `{"title":"b"}`
```html
<main>
  <p>
    b1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "a1" => "b1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    b2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "b1" => "b2"
```

# Update `{"title":"c"}`
```html
<main>
  <p>
    c2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "b2" => "c2"
```
