# Render `{"fail":false,"label":"a","big":true}`
```html
<p>
  ok
</p>
```

# Update `{"fail":true,"label":"b","big":true}`
```html
<b>
  SHOWN_message
</b>
<em>
  b
</em>
<i>
  b!
</i>
```
## Change
```
INSERT: b, i
REMOVE: i + p
UPDATE: b::text " " => "SHOWN_message"
INSERT: b + em
UPDATE: i::text " " => "b!"
UPDATE: em::text " " => "b"
```

# Update `{"fail":true,"label":"c","big":false}`
```html
<b>
  SHOWN_message
</b>
<b>
  c
</b>
<i>
  c?
</i>
```
## Change
```
INSERT: b:nth-of-type(1) + b
REMOVE: b:nth-of-type(2) + em
UPDATE: i::text "b!" => "c?"
UPDATE: b:nth-of-type(2)::text " " => "c"
```

# Update `{"fail":true,"label":"d","big":false}`
```html
<b>
  SHOWN_message
</b>
<b>
  d
</b>
<i>
  d?
</i>
```
## Change
```
UPDATE: i::text "c?" => "d?"
UPDATE: b:nth-of-type(2)::text "c" => "d"
```
