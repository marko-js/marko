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
