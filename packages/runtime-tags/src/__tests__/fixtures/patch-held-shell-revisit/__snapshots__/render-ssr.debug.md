# Render `{"page":0}`
```html
<header>
  <button>
    open
  </button>
</header>
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
<header>
  <button>
    open
  </button>
</header>
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
REMOVE: .b + button
```

# Update `{"page":0}`
```html
<header>
  <button>
    open
  </button>
</header>
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

# Update `{"page":1}`
```html
<header>
  <button>
    open
  </button>
</header>
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
REMOVE: .b + button
```
