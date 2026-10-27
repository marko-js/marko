# Render `{"title":"a","dyn":true}`
```html
<main>
  <p>
    sa
  </p>
  <p>
    0a
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
    sa
  </p>
  <p>
    1a
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(2)::text "0a" => "1a"
```

# Update `{"title":"b","dyn":true}`
```html
<main>
  <p>
    sb
  </p>
  <p>
    1b
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(1)::text "sa" => "sb"
UPDATE: main > p:nth-of-type(2)::text "1a" => "1b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    sb
  </p>
  <p>
    2b
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(2)::text "1b" => "2b"
```
