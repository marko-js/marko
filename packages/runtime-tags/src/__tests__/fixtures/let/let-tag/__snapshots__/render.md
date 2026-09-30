# Render
```html
<button>
  1
</button>
1
```

# Update `click("button")`
```html
<button>
  2
</button>
2
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: ::text "1" => "2"
```

# Update `click("button")`
```html
<button>
  4
</button>
4
```
## Change
```
UPDATE: button::text "2" => "4"
UPDATE: ::text "2" => "4"
```

# Update `click("button")`
```html
<button>
  8
</button>
8
```
## Change
```
UPDATE: button::text "4" => "8"
UPDATE: ::text "4" => "8"
```
