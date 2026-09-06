# Render
```html
<main>
  <button>
    show
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
    now
  </p>
  <button>
    show
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "now"
```
