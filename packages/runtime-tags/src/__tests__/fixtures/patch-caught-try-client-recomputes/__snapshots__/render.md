# Render `{"early":true,"label":"a","count":1}`
```html
<b>
  aearly
</b>
<i>
  a1
</i>
<p>
  ok
</p>
```

# Update `{"early":true,"late":true,"label":"a","count":1}`
```html
<b>
  aearly
</b>
<i>
  a1
</i>
<b>
  alate
</b>
<i>
  a1
</i>
```
## Change
```
INSERT: i:nth-of-type(1) + :is(b, i)
REMOVE: i:nth-of-type(2) + p
UPDATE: b:nth-of-type(2)::text " " => "alate"
UPDATE: i:nth-of-type(2)::text " " => "a1"
```

# Update `{"early":true,"late":true,"label":"b","count":1}`
```html
<b>
  bearly
</b>
<i>
  b1
</i>
<b>
  blate
</b>
<i>
  b1
</i>
```
## Change
```
UPDATE: b:nth-of-type(1)::text "aearly" => "bearly"
UPDATE: i:nth-of-type(1)::text "a1" => "b1"
UPDATE: b:nth-of-type(2)::text "alate" => "blate"
UPDATE: i:nth-of-type(2)::text "a1" => "b1"
```

# Update `{"early":true,"late":true,"label":"b","count":2}`
```html
<b>
  bearly
</b>
<i>
  b2
</i>
<b>
  blate
</b>
<i>
  b2
</i>
```
## Change
```
UPDATE: i:nth-of-type(1)::text "b1" => "b2"
UPDATE: i:nth-of-type(2)::text "b1" => "b2"
```
