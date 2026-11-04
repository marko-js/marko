# Render `{"n":0,"m":5,"p":{"value":"v"}}`

# Update
```html
<b>
  v 0
</b>
<p>
  5
</p>
```
## Change
```
INSERT: b
INSERT: b::text("v")
INSERT: b::text@0 + ::text(" ")
INSERT: b::text@1 + ::text("0")
INSERT: b + p
INSERT: p::text("5")
```
## Console
```
LOG "effect" 0 0
```

# Update `{"n":3,"m":5,"p":{"value":"v"}}`
```html
<b>
  v 3
</b>
<p>
  8
</p>
```
## Change
```
UPDATE: b::text@2 "0" => "3"
UPDATE: p::text "5" => "8"
```
## Console
```
LOG "effect" 3 6
```
