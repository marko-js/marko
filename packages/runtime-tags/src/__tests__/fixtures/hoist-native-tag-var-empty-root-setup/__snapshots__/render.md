# Render `{"show":true,"editable":true}`
```html
<div>
  shown
</div>
<button>
  click
</button>
```

# Update `click("button")`
```html
<div>
  clicked
</div>
<button>
  click
</button>
```
## Change
```
REMOVE: div::text("shown")
INSERT: div::text("clicked")
```
