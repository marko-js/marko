# Render `{"show":true}`
```html
<button>
  <span
    id="count"
  >
    0
  </span>
</button>
```

# Update `click("button")`
```html
<button>
  <span
    id="count"
  >
    1
  </span>
</button>
```
## Change
```
REMOVE: #count::text("0")
INSERT: #count::text("1")
```

# Update `click("button")`
```html
<button>
  <span
    id="count"
  >
    2
  </span>
</button>
```
## Change
```
REMOVE: #count::text("1")
INSERT: #count::text("2")
```
