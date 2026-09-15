# Render
```html
<main>
  <em>
    a
  </em>
  <button>
    t
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main > em
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    a
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text " " => "a"
```
