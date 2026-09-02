# Render `{"value":"a"}`
```html
<main>
  <pre>
    stamp
  </pre>
  <button>
    t
  </button>
</main>
```

# Update `{"value":"b"}`

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
REMOVE: main > pre
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <pre>
    stamp
  </pre>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > pre
UPDATE: main > pre::text " " => "stamp"
```
