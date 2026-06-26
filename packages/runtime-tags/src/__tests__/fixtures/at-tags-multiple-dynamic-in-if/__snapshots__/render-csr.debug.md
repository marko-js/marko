# Render `{"cond":true}`
```html
<div>
  x: 1 y: 2
</div>
```

# Update `{"cond":false}`
```html
<div>
  x:  y: 
</div>
```
## Change
```
UPDATE: div::text "1" => ""
UPDATE: div::text "2" => ""
```

# Update `{"cond":true}`
```html
<div>
  x: 1 y: 2
</div>
```
## Change
```
UPDATE: div::text@3 "" => "1"
UPDATE: div::text@8 "" => "2"
```
