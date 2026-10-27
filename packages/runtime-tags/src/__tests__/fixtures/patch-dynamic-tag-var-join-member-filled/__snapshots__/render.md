# Render `{"which":true,"id":"a"}`
```html
<i>
  one
</i>
<span>
  one a
</span>
<p>
  a
</p>
```

# Update `{"which":true,"id":"b"}`
```html
<i>
  one
</i>
<span>
  one b
</span>
<p>
  b
</p>
```
## Change
```
UPDATE: span::text "one a" => "one b"
UPDATE: p::text "a" => "b"
```

# Update `{"which":false,"id":"c"}`
```html
<b>
  two
</b>
<span>
  two c
</span>
<p>
  c
</p>
```
## Change
```
INSERT: b
REMOVE: b + i
UPDATE: span::text "one b" => "two c"
UPDATE: p::text "b" => "c"
```

# Update `{"which":true,"id":"d"}`
```html
<i>
  one
</i>
<span>
  one d
</span>
<p>
  d
</p>
```
## Change
```
INSERT: i
REMOVE: i + b
UPDATE: span::text "two c" => "one d"
UPDATE: p::text "c" => "d"
```
