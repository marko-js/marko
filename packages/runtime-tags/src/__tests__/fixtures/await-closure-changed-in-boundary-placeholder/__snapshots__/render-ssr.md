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
  2
</span>
<b>
  2
</b>
```
## Change
```
INSERT: b::text("2")
REMOVE: ::text("loading...")
INSERT: button + :is(span, b)
UPDATE: b::text "1" => "2"
```

# Update `click("button")`
```html
<button>
  inc
</button>
<span>
  3
</span>
<b>
  3
</b>
```
## Change
```
UPDATE: span::text "2" => "3"
UPDATE: b::text "2" => "3"
```
