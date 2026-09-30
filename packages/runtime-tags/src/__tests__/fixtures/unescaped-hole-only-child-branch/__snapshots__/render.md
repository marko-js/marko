# Render `{"html":"<b>a</b>"}`
```html
<main>
  <button>
    t
  </button>
</main>
```

# Update `click("button")`
```html
<main>
  <b>
    a
  </b>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > b
```

# Update `click("button")`
```html
<main>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main > b
```

# Update `click("button")`
```html
<main>
  <b>
    a
  </b>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > b
```
