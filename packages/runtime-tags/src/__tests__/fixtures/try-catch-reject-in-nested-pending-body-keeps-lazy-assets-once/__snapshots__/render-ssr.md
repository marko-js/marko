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
INSERT: span
INSERT: span::text("catch")
INSERT: span + ::text(" caught outer")
REMOVE: ::text("caught inner")
```
## Console
```
LOG "loaded catch"
```
