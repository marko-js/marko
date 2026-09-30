# Render
```html
<button>
  1.234,50 € Jan 1, 1970
</button>
```

# Update `click("button")`
```html
<button>
  2.234,50 € Jan 1, 1970
</button>
```
## Change
```
UPDATE: button::text@0 "1.234,50 €" => "2.234,50 €"
```
