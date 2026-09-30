# Render
```html
<span>
  body
</span>
```

# Update
```html
<span>
  catch
</span>
caught ERROR!
```
## Change
```
INSERT: span
INSERT: span::text("catch")
INSERT: span + ::text(" caught ERROR!")
REMOVE: span
```
## Console
```
LOG "loaded catch"
```

# Update
```js
document.defaultView.console.log(
document.querySelectorAll('script[src="child.marko.load.mjs"]').length,
  );
```
## Console
```
LOG 1
```
