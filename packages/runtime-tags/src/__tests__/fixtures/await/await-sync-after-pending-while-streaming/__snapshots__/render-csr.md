# Render
```html
<button>
  a
</button>
```

# Update `click("button")`
```html
<button>
  b
</button>
```
## Change
```
UPDATE: button::text "a" => "b"
```

# Update `click("button")`
```html
<button />
<div>
  no query
</div>
```
## Change
```
UPDATE: button::text "b" => ""
INSERT: button + div
UPDATE: div::text " " => "no query"
```
