# Render `{"show":false,"n":2}`

# Update `{"show":true,"n":2}`
```html
<span>
  a2
</span>
<span>
  a1
</span>
<span>
  a0
</span>
<em>
  0
</em>
<em>
  10
</em>
```
## Change
```
INSERT: span, span, span, em, em
```

# Update `{"show":true,"n":3}`
```html
<span>
  a3
</span>
<span>
  a2
</span>
<span>
  a1
</span>
<span>
  a0
</span>
<em>
  0
</em>
<em>
  10
</em>
<em>
  20
</em>
```
## Change
```
UPDATE: span:nth-of-type(1)::text@1 "2" => "3"
UPDATE: em:nth-of-type(3)::text "10" => "20"
UPDATE: span:nth-of-type(2)::text@1 "1" => "2"
UPDATE: em:nth-of-type(2)::text "0" => "10"
UPDATE: span:nth-of-type(3)::text@1 "0" => "1"
INSERT: span:nth-of-type(3) + :is(span, em)
```
