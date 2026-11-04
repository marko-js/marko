# Render `{"items":[]}`

# Update `{"items":[{"name":"a"},{"name":"b"},{"name":"c"}]}`
```html
<i>
  a
</i>
<i>
  b
</i>
<i>
  c
</i>
```
## Change
```
INSERT: i
INSERT: i:nth-of-type(1) + i
INSERT: i:nth-of-type(2) + i
```
## Console
```
LOG "row" "a"
LOG "row" "b"
LOG "row" "c"
```

# Update `{"items":[{"name":"a"},{"name":"B"},{"name":"c"}]}`
```html
<i>
  a
</i>
<i>
  B
</i>
<i>
  c
</i>
```
## Change
```
UPDATE: i:nth-of-type(2)::text "b" => "B"
```
## Console
```
LOG "row" "B"
```
