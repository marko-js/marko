# Render
```html
<button>
  inc
</button>
loading...
```

# Update `click("button")`

# Update
```html
<button>
  inc
</button>
<span>
  3
</span>
```
## Change
```
INSERT: span::text("3")
REMOVE: ::text("loading...")
INSERT: button + span
UPDATE: span::text "2" => "3"
```

# Update `click("button")`
```html
<button>
  inc
</button>
<span>
  4
</span>
```
## Change
```
UPDATE: span::text "3" => "4"
```
