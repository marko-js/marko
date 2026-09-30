# Render
```html
<div>
  <button>
    0
  </button>
</div>
```

# Update `click("button")`
```html
<div>
  <button>
    1
  </button>
</div>
```
## Change
```
UPDATE: div > button::text "0" => "1"
```

# Update `click("button")`
```html
<div>
  <button>
    2
  </button>
</div>
```
## Change
```
UPDATE: div > button::text "1" => "2"
```

# Update `click("button")`
```html
<div>
  <span>
    The button was clicked 3 times.
  </span>
</div>
```
## Change
```
INSERT: div > span
REMOVE: div > span + button
UPDATE: div > span::text@23 "" => "3"
```
