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

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-title="a"
>
  <p>
    big
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main[data-title] null => "a"
```

# Update `{"title":"b"}`
```html
<main
  data-title="b"
>
  <p>
    big
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main[data-title] "a" => "b"
```
