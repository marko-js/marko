# Render `{"which":true,"id":"a"}`
```html
<i>
  one a
</i>
<p>
  a
</p>
```

# Update `{"which":true,"id":"b"}`
```html
<i>
  one b
</i>
<p>
  b
</p>
```
## Change
```
UPDATE: i::text@4 "a" => "b"
UPDATE: p::text "a" => "b"
```

# Update `{"which":false,"id":"c"}`
```html
<b>
  two c
</b>
<p>
  c
</p>
```
## Change
```
INSERT: b
REMOVE: b + i
UPDATE: b::text@4 "" => "c"
UPDATE: p::text "b" => "c"
```

# Update `{"which":true,"id":"d"}`
```html
<i>
  one d
</i>
<p>
  d
</p>
```
## Change
```
INSERT: i
REMOVE: i + b
UPDATE: i::text@4 "" => "d"
UPDATE: p::text "c" => "d"
```
