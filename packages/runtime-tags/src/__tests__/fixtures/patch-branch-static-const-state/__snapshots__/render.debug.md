# Render `{"show":false}`
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

# Update `{"show":true}`
```html
<main>
  <p>
    21
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "21"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    22
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "21" => "22"
```
