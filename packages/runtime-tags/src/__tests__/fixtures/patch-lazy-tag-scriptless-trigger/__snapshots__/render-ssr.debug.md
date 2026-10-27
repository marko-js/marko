# Render `{"show":false,"label":"a"}`
```html
<main />
```

# Update `{"show":true,"label":"b"}`

# Update
```js
document.body.click();
```

# Update
```html
<main>
  <p
    class="child"
  >
    b
  </p>
</main>
```
## Change
```
INSERT: main > .child
```

# Update Release

# Update `{"show":false,"label":"b"}`
```html
<main />
```
## Change
```
REMOVE: main > p
```

# Update `{"show":true,"label":"c"}`
```html
<main>
  <p
    class="child"
  >
    c
  </p>
</main>
```
## Change
```
INSERT: main > .child
```
