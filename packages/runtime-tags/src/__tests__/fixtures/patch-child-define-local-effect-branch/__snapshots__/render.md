# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<p>
  b!
</p>
```
## Change
```
INSERT: p
```
## Console
```
LOG "effect" "b!"
```

# Update `{"show":true,"label":"c"}`
```html
<p>
  c!
</p>
```
## Change
```
UPDATE: p::text "b!" => "c!"
```
## Console
```
LOG "effect" "c!"
```
