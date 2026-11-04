# Render `{"items":["p","q"],"y":"s"}`
```html
<p>
  sp
</p>
<div>
  s:p
</div>
<p>
  sq
</p>
<div>
  s:q
</div>
```

# Update `{"items":["r","q"],"y":"t"}`
```html
<p>
  tr
</p>
<div>
  s:r
</div>
<p>
  tq
</p>
<div>
  s:q
</div>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "sp" => "tr"
UPDATE: p:nth-of-type(2)::text "sq" => "tq"
REMOVE: div:nth-of-type(1)::text("s:p")
INSERT: div:nth-of-type(1)::text("s:r")
```

# Update `{"items":["u","v"],"y":"w"}`
```html
<p>
  wu
</p>
<div>
  s:u
</div>
<p>
  wv
</p>
<div>
  s:v
</div>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "tr" => "wu"
UPDATE: p:nth-of-type(2)::text "tq" => "wv"
REMOVE: div:nth-of-type(1)::text("s:r")
INSERT: div:nth-of-type(1)::text("s:u")
REMOVE: div:nth-of-type(2)::text("s:q")
INSERT: div:nth-of-type(2)::text("s:v")
```
