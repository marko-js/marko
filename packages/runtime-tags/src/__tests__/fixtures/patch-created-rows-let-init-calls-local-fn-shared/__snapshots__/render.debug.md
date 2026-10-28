# Render `{"show":false,"v":"a","w":"1"}`

# Update `{"show":true,"v":"a","w":"2"}`
```html
<p>
  a2
</p>
<span>
  a
</span>
<p>
  a2
</p>
<span>
  a
</span>
```
## Change
```
INSERT: p, span
INSERT: span:nth-of-type(1) + :is(p, span)
UPDATE: p:nth-of-type(1)::text " " => "a2"
UPDATE: p:nth-of-type(2)::text " " => "a2"
```

# Update `{"show":true,"v":"a","w":"3"}`
```html
<p>
  a3
</p>
<span>
  a
</span>
<p>
  a3
</p>
<span>
  a
</span>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "a2" => "a3"
UPDATE: p:nth-of-type(2)::text "a2" => "a3"
```

# Update `{"show":false,"v":"b","w":"4"}`
## Change
```
REMOVE: p
REMOVE: span
REMOVE: p
REMOVE: span
```

# Update `{"show":true,"v":"b","w":"5"}`
```html
<p>
  b5
</p>
<span>
  b
</span>
<p>
  b5
</p>
<span>
  b
</span>
```
## Change
```
INSERT: p, span
INSERT: span:nth-of-type(1) + :is(p, span)
UPDATE: p:nth-of-type(1)::text " " => "b5"
UPDATE: p:nth-of-type(2)::text " " => "b5"
```
