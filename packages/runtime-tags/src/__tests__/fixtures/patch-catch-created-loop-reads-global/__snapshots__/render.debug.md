# Render `{"n":2,"$global":{"label":"a","serializedGlobals":["label"]}}`
```html
<p>
  ok
</p>
```

# Update `{"n":2,"late":true,"$global":{"label":"b","serializedGlobals":["label"]}}`
```html
<b>
  late
</b>
<i>
  0:b
</i>
<i>
  1:b
</i>
```
## Change
```
INSERT: b
REMOVE: i:nth-of-type(2) + p
UPDATE: b::text " " => "late"
INSERT: b + i
INSERT: i:nth-of-type(1) + i
UPDATE: i:nth-of-type(1)::text@0 "" => "0"
UPDATE: i:nth-of-type(1)::text@2 "" => "b"
UPDATE: i:nth-of-type(2)::text@0 "" => "1"
UPDATE: i:nth-of-type(2)::text@2 "" => "b"
```

# Update `{"n":2,"late":true,"$global":{"label":"c","serializedGlobals":["label"]}}`
```html
<b>
  late
</b>
<i>
  0:c
</i>
<i>
  1:c
</i>
```
## Change
```
UPDATE: i:nth-of-type(1)::text@2 "b" => "c"
UPDATE: i:nth-of-type(2)::text@2 "b" => "c"
```
