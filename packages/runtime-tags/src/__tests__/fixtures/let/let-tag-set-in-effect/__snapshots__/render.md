# Render
```html
<span>
  1
</span>
<span>
  0
</span>
```

# Update
```html
<span>
  2
</span>
<span>
  1
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "1" => "2"
UPDATE: span:nth-of-type(2)::text "0" => "1"
```

# Update
```html
<span>
  2
</span>
<span>
  2
</span>
```
## Change
```
UPDATE: span:nth-of-type(2)::text "1" => "2"
```
