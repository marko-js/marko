# Render

# Update
```html
loading
```
## Change
```
INSERT: ::text(" loading")
```
## Console
```
LOG "placeholder mounted"
```

# Update
```html
done
```
## Change
```
INSERT: ::text("done")
REMOVE: ::text + ::text(" loading")
```
## Console
```
LOG "placeholder destroyed"
```
