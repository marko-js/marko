# Render `{"list":["a"]}`
```html
<button>
  inc 1
</button>
<div>
  a|dflt|
</div>
```

# Update `{"list":["a","b","c"]}`
```html
<button>
  inc 1
</button>
<div>
  a|b|c
</div>
```
## Change
```
UPDATE: div::text@4 "" => "c"
UPDATE: div::text@2 "dflt" => "b"
```
