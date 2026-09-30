# Render

# Update
```html
Caught: Failure
```
## Change
```
INSERT: ::text("Caught: "), ::text("Failure")
UPDATE: ::text@8 "" => "Failure"
```

# Update
```html
SuccessCaught: Failure
```
## Change
```
INSERT: ::text("Success")
UPDATE: ::text@0 " " => "Success"
```
