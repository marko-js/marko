# Render
```html
<button>
  0
</button>
```

# Update `click("button")`
```html
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `click("button")`
```html
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```
## Console
```
LOG "abort" 1
```

# Update `click("button")`
```html
<button>
  3
</button>
```
## Change
```
UPDATE: button::text "2" => "3"
```
## Console
```
LOG "abort" 2
```
