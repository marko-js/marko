# Render `{"value":1}`
```html
<button>
  Inc
</button>
```

# Update
```html
<span>
  0
</span>
<button>
  Inc
</button>
```
## Change
```
INSERT: span
```

# Update `click("button")`
```html
<span>
  1
</span>
<button>
  Inc
</button>
```
## Change
```
UPDATE: span::text "0" => "1"
```
