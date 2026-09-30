# Render `{"settings":{"a":1,"b":2}}`
```html
<button>
  inc 1
</button>
<div>
  1 2 3
</div>
<div>
  1 2 3
</div>
<div>
  1 2
</div>
```

# Update `{"settings":{"a":9,"b":10}}`
```html
<button>
  inc 1
</button>
<div>
  1 2 3
</div>
<div>
  1 2 3
</div>
<div>
  9 10
</div>
```
## Change
```
UPDATE: div:nth-of-type(3)::text@0 "1" => "9"
UPDATE: div:nth-of-type(3)::text@2 "2" => "10"
```
