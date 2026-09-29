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
INSERT: main > button
INSERT: main > em
UPDATE: main > button::text " " => "ok"
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
