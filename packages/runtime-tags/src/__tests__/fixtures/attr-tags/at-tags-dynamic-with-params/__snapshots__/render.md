# Render
```html
y: 1
<button>
  Toggle
</button>
```

# Update `click("button")`
```html
<button>
  Toggle
</button>
```
## Change
```
REMOVE: ::text("y: ")
REMOVE: ::text("1")
```

# Update `click("button")`
```html
y: 1
<button>
  Toggle
</button>
```
## Change
```
INSERT: ::text("y: "), ::text("1")
UPDATE: ::text@3 "" => "1"
```

# Update `click("button")`
```html
<button>
  Toggle
</button>
```
## Change
```
REMOVE: ::text("y: ")
REMOVE: ::text("1")
```
