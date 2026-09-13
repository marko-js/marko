# Render `{"a":"1"}`
```html
<main>
  <button>
    +
  </button>
</main>
```

# Update `{"a":"2"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > p
```
