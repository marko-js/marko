# Render
```html
<button>
  1|1
</button>
```

# Update `click("button")`
```html
<button>
  3|3
</button>
```
## Change
```
UPDATE: button::text@0 "1" => "3"
UPDATE: button::text@2 "1" => "3"
```

# Update `click("button")`
```html
<button>
  5|5
</button>
```
## Change
```
UPDATE: button::text@0 "3" => "5"
UPDATE: button::text@2 "3" => "5"
```

# Update `click("button")`
```html
<button>
  7|7
</button>
```
## Change
```
UPDATE: button::text@0 "5" => "7"
UPDATE: button::text@2 "5" => "7"
```
