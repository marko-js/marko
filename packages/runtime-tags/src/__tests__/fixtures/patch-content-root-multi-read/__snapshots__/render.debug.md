# Render `{"content":"div"}`
```html
<main>
  <div />
  <p>
    div:0
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
  <div />
  <p>
    div:1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "div:0" => "div:1"
```

# Update `{"content":"span"}`
```html
<main>
  <span />
  <p>
    span:1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > span
REMOVE: main > span + div
UPDATE: main > p::text "div:1" => "span:1"
```
