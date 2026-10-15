# Render `{"page":0}`
```html
<main>
  <button
    class="a"
  >
    a:0
  </button>
</main>
```

# Update `{"page":1}`
```html
<main>
  <button
    class="b"
  >
    b:0
  </button>
</main>
```
## Change
```
INSERT: main > .b
REMOVE: .b + link
REMOVE: .b + button
```

# Update `{"page":0}`
```html
<main>
  <button
    class="a"
  >
    a:0
  </button>
</main>
```
## Change
```
INSERT: main > .a
REMOVE: .a + button
```
