# Render
```html
<button>
  Toggle
</button>
```

# Update `click("button")`
```html
<button>
  Toggle
</button>
<div>
  Value: foo
</div>
```
## Change
```
INSERT: button + div
UPDATE: div::text@7 "" => "foo"
```

# Update `click("button")`
```html
<button>
  Toggle
</button>
```
## Change
```
REMOVE: button + div
```

# Update `click("button")`
```html
<button>
  Toggle
</button>
<div>
  Value: foo
</div>
```
## Change
```
INSERT: button + div
UPDATE: div::text@7 "" => "foo"
```
