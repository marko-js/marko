# Render `{"show":false,"promise":{}}`
```html
<main />
```

# Update `{"show":true,"promise":{}}`
```html
<main>
  <em>
    b
  </em>
  <button>
    ok
  </button>
</main>
```
## Change
```
INSERT: main > :is(em, button)
```

# Update
```js
container.querySelector("button").click();
```
```html
<main />
```
## Change
```
REMOVE: main > em
REMOVE: main > button
```
