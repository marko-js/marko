# Render `{"label":"a","$global":{"label":"a","serializedGlobals":["label"]}}`
```html
<p />
<b>
  a a early
</b>
<p>
  ok
</p>
```

# Update `{"label":"b","late":true,"$global":{"label":"b","serializedGlobals":["label"]}}`
```html
<p />
<b>
  a a early
</b>
<b>
  b b late
</b>
```
## Change
```
INSERT: b:nth-of-type(1) + b
REMOVE: b:nth-of-type(2) + p
UPDATE: b:nth-of-type(2)::text@0 "" => "b"
UPDATE: b:nth-of-type(2)::text@2 "" => "b"
UPDATE: b:nth-of-type(2)::text@4 "" => "late"
```

# Update `{"label":"c","late":true,"$global":{"label":"c","serializedGlobals":["label"]}}`
