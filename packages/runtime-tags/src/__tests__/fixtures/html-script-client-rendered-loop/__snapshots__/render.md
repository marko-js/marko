# Render
```html
<main
  data-ran="a"
>
  <button>
    add
  </button>
  <p>
    a
  </p>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-ran="ab"
>
  <button>
    add
  </button>
  <p>
    a
  </p>
  <p>
    b
  </p>
</main>
```
## Change
```
INSERT: main > p:nth-of-type(1) + p
UPDATE: main[data-ran] "a" => "ab"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-ran="abc"
>
  <button>
    add
  </button>
  <p>
    a
  </p>
  <p>
    b
  </p>
  <p>
    c
  </p>
</main>
```
## Change
```
INSERT: main > p:nth-of-type(2) + p
UPDATE: main[data-ran] "ab" => "abc"
```
