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

# Update `{"early":true,"late":true,"$global":{"label":"g2","p":{},"serializedGlobals":["label","p"]}}`
```html
<b>
  g2 early
</b>
<i>
  y
</i>
<b>
  g2 late
</b>
<i>
  y
</i>
```
## Change
```
INSERT: i:nth-of-type(1) + b
REMOVE: i:nth-of-type(2) + p
UPDATE: b:nth-of-type(2)::text " " => "g2 late"
UPDATE: b:nth-of-type(1)::text "g1 early" => "g2 early"
INSERT: b:nth-of-type(2) + i
UPDATE: i:nth-of-type(1)::text "x" => "y"
```

# Update `{"early":true,"late":true,"$global":{"label":"g3","p":{},"serializedGlobals":["label","p"]}}`
```html
<b>
  g3 early
</b>
<i>
  z
</i>
<b>
  g3 late
</b>
<i>
  z
</i>
```
## Change
```
UPDATE: b:nth-of-type(1)::text "g2 early" => "g3 early"
UPDATE: b:nth-of-type(2)::text "g2 late" => "g3 late"
UPDATE: i:nth-of-type(1)::text "y" => "z"
UPDATE: i:nth-of-type(2)::text "y" => "z"
```
