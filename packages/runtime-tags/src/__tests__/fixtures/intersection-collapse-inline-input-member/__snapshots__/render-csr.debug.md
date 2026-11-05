# Render `{"list":[]}`
```html
<div>
  0
</div>
```

# Update `{"list":[{"on":true},{"on":false}]}`
```html
<div>
  5
</div>
```
## Change
```
UPDATE: div::text "0" => "5"
```

# Update `{"list":[{"on":true}]}`
```html
<div>
  3
</div>
```
## Change
```
UPDATE: div::text "5" => "3"
```
