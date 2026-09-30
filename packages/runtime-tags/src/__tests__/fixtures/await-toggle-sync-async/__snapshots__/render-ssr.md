# Render
```html
Got: SYNC
<button>
  toggle
</button>
```

# Update `click("button")`

# Update
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: ::text("Got: ")
REMOVE: ::text("SYNC")
```

# Update
```html
Got: ASYNC
<button>
  toggle
</button>
```
## Change
```
INSERT: ::text("Got: "), ::text("ASYNC")
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
UPDATE: ::text@5 "ASYNC" => "SYNC"
```
