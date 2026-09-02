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
document.querySelector("main > button").click();
```

# Update
```js
document.querySelector("main > button").click();
```
```html
<main>
  <button>
    read
  </button>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > button
```

# Update
```js
document.querySelector("main button:first-child").click();
```
```html
<main
  data-title="a"
>
  <button>
    read
  </button>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main[data-title] null => "a"
```

# Update `{"title":"b"}`

# Update
```js
document.querySelector("main button:first-child").click();
```
```html
<main
  data-title="b"
>
  <button>
    read
  </button>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main[data-title] "a" => "b"
```
