# Render

# Update
```html
caught inner
```
## Change
```
INSERT: ::text("caught inner")
```

# Update
```html
<span>
  catch
</span>
caught outer
```
## Change
```
REMOVE: ::text("caught inner")
INSERT: span
INSERT: span::text("catch")
INSERT: ::text(" caught outer")
```
## Console
```
LOG "loaded catch"
```
