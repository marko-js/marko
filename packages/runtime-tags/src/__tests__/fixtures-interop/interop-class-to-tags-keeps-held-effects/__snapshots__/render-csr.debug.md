# Render
## Console
```
LOG "b before"
LOG "b after"
LOG "a before"
LOG "a after"
```

# Update
```html
valuevalue
```
## Change
```
INSERT: ::text("value")
UPDATE: ::text@0 " " => "value"
INSERT: ::text@0 + ::text("value")
UPDATE: ::text@5 " " => "value"
```
## Console
```
LOG "a in try"
LOG "b in try"
```
