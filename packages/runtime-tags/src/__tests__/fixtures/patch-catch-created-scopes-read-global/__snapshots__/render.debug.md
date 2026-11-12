# Render `{"n":2,"show":true,"$global":{"label":"a","serializedGlobals":["label"]}}`
```html
<p>
  ok
</p>
```

# Update `{"n":2,"show":true,"late":true,"$global":{"label":"b","serializedGlobals":["label"]}}`
```html
<b>
  late
</b>
<em>
  0:b
</em>
<i>
  b
</i>
<i>
  1:b
</i>
<u>
  b
</u>
<s>
  0:b
</s>
<s>
  1:b
</s>
```
## Change
```
INSERT: b, em, i, i
REMOVE: s:nth-of-type(2) + p
UPDATE: b::text " " => "late"
UPDATE: i:nth-of-type(1)::text " " => "b"
UPDATE: i:nth-of-type(2)::text@0 "" => "1"
UPDATE: i:nth-of-type(2)::text@2 "" => "b"
INSERT: i:nth-of-type(2) + u
INSERT: u + s
INSERT: s:nth-of-type(1) + s
UPDATE: em::text " " => "0:b"
```

# Update `{"n":2,"show":true,"late":true,"$global":{"label":"c","serializedGlobals":["label"]}}`
```html
<b>
  late
</b>
<em>
  0:c
</em>
<i>
  c
</i>
<i>
  1:c
</i>
<u>
  c
</u>
<s>
  0:c
</s>
<s>
  1:c
</s>
```
## Change
```
UPDATE: em::text "0:b" => "0:c"
UPDATE: i:nth-of-type(1)::text "b" => "c"
UPDATE: i:nth-of-type(2)::text@2 "b" => "c"
UPDATE: u::text "b" => "c"
UPDATE: s:nth-of-type(1)::text@2 "b" => "c"
UPDATE: s:nth-of-type(2)::text@2 "b" => "c"
```
