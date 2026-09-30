# Render
```html
<button>
  toggle
</button>
```

# Update `click("button")`
```html
Got: SYNC
<button>
  toggle
</button>
```
## Change
```
INSERT: ::text("Got: "), ::text("SYNC")
UPDATE: ::text@5 "" => "SYNC"
```
