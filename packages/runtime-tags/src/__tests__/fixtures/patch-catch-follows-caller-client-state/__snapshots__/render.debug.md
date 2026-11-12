# Render `{"label":"a","$global":{"label":"a","serializedGlobals":["label"]}}`
```html
<button>
  0
</button>
<p>
  0
</p>
<b>
  a a early
</b>
<p>
  ok
</p>
```

# Update `{"label":"b","late":true,"$global":{"label":"b","serializedGlobals":["label"]}}`
```html
<button>
  0
</button>
<p>
  0
</p>
<b>
  b b early
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
UPDATE: b:nth-of-type(1)::text@0 "a" => "b"
UPDATE: b:nth-of-type(1)::text@2 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  1
</p>
<b>
  b b early
</b>
<b>
  b b late
</b>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: p::text "0" => "1"
```

# Update `{"label":"c","late":true,"$global":{"label":"c","serializedGlobals":["label"]}}`
```html
<button>
  1
</button>
<p>
  1
</p>
<b>
  c c early
</b>
<b>
  c c late
</b>
```
## Change
```
UPDATE: b:nth-of-type(1)::text@0 "b" => "c"
UPDATE: b:nth-of-type(1)::text@2 "b" => "c"
UPDATE: b:nth-of-type(2)::text@2 "b" => "c"
UPDATE: b:nth-of-type(2)::text@0 "b" => "c"
```
