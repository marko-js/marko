# Render `{"labels":["a","b"],"note":"x"}`
```html
<button>
  toggle
</button>
<em>
  a:x
</em>
<em>
  b:x
</em>
```

# Update `{"labels":["a","b","c"],"note":"y"}`
```html
<button>
  toggle
</button>
<em>
  a:y
</em>
<em>
  b:y
</em>
<em>
  c:y
</em>
```
## Change
```
UPDATE: em:nth-of-type(1)::text@2 "x" => "y"
UPDATE: em:nth-of-type(2)::text@2 "x" => "y"
INSERT: em:nth-of-type(2) + em
UPDATE: em:nth-of-type(3)::text@2 "" => "y"
```

# Update `{"labels":["c"],"note":"z"}`
```html
<button>
  toggle
</button>
<em>
  c:z
</em>
```
## Change
```
REMOVE: em + em
REMOVE: em + em
UPDATE: em::text@0 "a" => "c"
UPDATE: em::text@2 "y" => "z"
```
