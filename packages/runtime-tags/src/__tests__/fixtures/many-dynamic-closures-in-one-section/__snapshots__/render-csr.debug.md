# Render `{"a":1,"b":2,"c":3}`
```html
<p>
  1
</p>
<p>
  2
</p>
<p>
  3
</p>
```

# Update `{"a":4,"b":2,"c":3}`
```html
<p>
  4
</p>
<p>
  2
</p>
<p>
  3
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "1" => "4"
```

# Update `{"a":4,"b":5,"c":3}`
```html
<p>
  4
</p>
<p>
  5
</p>
<p>
  3
</p>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "2" => "5"
```

# Update `{"a":4,"b":5,"c":6}`
```html
<p>
  4
</p>
<p>
  5
</p>
<p>
  6
</p>
```
## Change
```
UPDATE: p:nth-of-type(3)::text "3" => "6"
```
