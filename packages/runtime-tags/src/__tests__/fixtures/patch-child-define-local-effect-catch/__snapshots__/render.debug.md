# Render `{"label":"a","promise":{}}`
```html
<em>
  ok
</em>
```

# Update `{"label":"b","promise":{}}`
```html
<b>
  boom
</b>
```
## Change
```
INSERT: b
REMOVE: b + em
UPDATE: b::text " " => "boom"
```
## Console
```
LOG "catch" "b!"
LOG "catch" "b!"
```

# Update `{"label":"c","promise":{}}`
## Console
```
LOG "catch" "c!"
```
