# Render
```html
<div>
  nullish/1 falsy/2 
</div>
```

# Update `{"opts":{"label":"given","size":9}}`
```html
<div>
  given/9 given/9 guarded
</div>
```
## Change
```
UPDATE: div::text@0 "nullish" => "given"
UPDATE: div::text@6 "1" => "9"
UPDATE: div::text@8 "falsy" => "given"
UPDATE: div::text@14 "2" => "9"
UPDATE: div::text@16 "" => "guarded"
```
