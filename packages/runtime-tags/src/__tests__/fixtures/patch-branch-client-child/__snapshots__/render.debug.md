# Render `{"label":"l1"}`
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

# Update `{"label":"l2"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    l2
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text " " => "l2"
```

# Update `{"label":"l3"}`
```html
<main>
  <em>
    l3
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "l2" => "l3"
```
