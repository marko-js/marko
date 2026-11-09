# Render `{"list":[{"on":true},{"on":false}]}`
```html
<div>
  5
</div>
```
## Console
```
LOG 1
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
## Console
```
LOG 0
```
