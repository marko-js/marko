# Render
```html
loading
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
INSERT: span::text("catch")
REMOVE: ::text("loading")
INSERT: span, ::text(" caught ERROR!")
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
