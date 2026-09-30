# Render `{"value":1}`

# Update
```html
<button>
  x: 1
</button>
```
## Change
```
INSERT: button
```

# Update `click("button")`
```html
<button>
  x: 2
</button>
```
## Change
```
UPDATE: button::text@3 "1" => "2"
```
