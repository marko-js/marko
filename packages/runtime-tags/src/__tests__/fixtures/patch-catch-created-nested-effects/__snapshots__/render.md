# Render `{"msg":"a","show":true,"items":[1],"v":1}`
```html
<p>
  a
</p>
```

# Update `{"fail":true,"msg":"b","show":true,"items":[1],"v":1}`
```html
<b>
  b
</b>
<i>
  10
</i>
<u>
  1
</u>
<div>
  <s>
    10
  </s>
</div>
```
## Change
```
INSERT: b, div
REMOVE: div + p
UPDATE: b::text " " => "b"
INSERT: b + i
INSERT: i + u
INSERT: div > s
UPDATE: div > s::text " " => "10"
```
## Console
```
LOG "if" 1
LOG "for" 1 1
LOG "content" 1
LOG "catch" 1
```

# Update `{"fail":true,"msg":"c","show":true,"items":[1,2],"v":2}`
```html
<b>
  b
</b>
<i>
  20
</i>
<u>
  1
</u>
<u>
  2
</u>
<div>
  <s>
    20
  </s>
</div>
```
## Change
```
INSERT: u:nth-of-type(1) + u
UPDATE: i::text "10" => "20"
UPDATE: div > s::text "10" => "20"
```
## Console
```
LOG "catch" 2
LOG "if" 2
LOG "for" 1 2
LOG "content" 2
LOG "for" 2 2
```

# Update `{"msg":"d","show":true,"items":[1],"v":3}`

## Patch rejected (navigate)
