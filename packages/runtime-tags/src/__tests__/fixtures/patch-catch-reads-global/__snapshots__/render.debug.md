# Render `{"early":true,"$global":{"label":"g1","p":{},"serializedGlobals":["label","p"]}}`
```html
<b>
  g1 early
</b>
<i>
  x
</i>
<p>
  ok
</p>
```

# Update `{"early":true,"late":true,"$global":{"label":"g1","p":{},"serializedGlobals":["label","p"]}}`
```html
<b>
  g1 early
</b>
<i>
  x
</i>
<b>
  g1 late
</b>
<i>
  x
</i>
```
## Change
```
INSERT: i:nth-of-type(1) + b
REMOVE: i:nth-of-type(2) + p
UPDATE: b:nth-of-type(2)::text " " => "g1 late"
INSERT: b:nth-of-type(2) + i
```
