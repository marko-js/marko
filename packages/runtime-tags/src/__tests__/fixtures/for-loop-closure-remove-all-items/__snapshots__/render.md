# Render
```html
<div>
  <button>
    Test
  </button>
  <div />
</div>
```

# Update `click("button")`
```html
<div>
  <div>
    hello
  </div>
</div>
```
## Change
```
INSERT: div > div::text("hello")
REMOVE: div > button
```
