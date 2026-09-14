# Render
```html
<main>
  <p>
    stamp
  </p>
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
REMOVE: main > p
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    stamp
  </p>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "stamp"
```
