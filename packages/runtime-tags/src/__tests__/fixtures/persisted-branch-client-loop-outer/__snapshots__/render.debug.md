# Render `{"items":["x"],"note":"n1"}`
```html
<main>
  <li>
    x
  </li>
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
  <li>
    x
    <p>
      n1
    </p>
  </li>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > li::text + p
UPDATE: main > li > p::text " " => "n1"
```

# Update `{"items":["x"],"note":"n2"}`
```html
<main>
  <li>
    x
    <p>
      n2
    </p>
  </li>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > li::text "x" => "x"
UPDATE: main > li > p::text "n1" => "n2"
```

# Update `{"items":["x","y"],"note":"n2"}`

## Patch rejected (navigate)
