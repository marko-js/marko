# Render `{"value":0}`
```html
<div>
  0 0
</div>
```

# Update
```html
<div>
  1 0
</div>
```
## Change
```
UPDATE: div::text@0 "0" => "1"
```

# Update `{"value":1}`

# Update
```html
<div>
  2 1
</div>
```
## Change
```
UPDATE: div::text@0 "1" => "2"
UPDATE: div::text@2 "0" => "1"
```
