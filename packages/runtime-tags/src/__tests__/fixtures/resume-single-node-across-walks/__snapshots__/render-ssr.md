# Render
```html
loading
<button>
  1:
</button>
```

# Update
```html
<span>
  done
</span>
<button>
  1:1
</button>
<button>
  2:
</button>
```
## Change
```
INSERT: button:nth-of-type(1)::text@0 + ::text("1")
INSERT: button:nth-of-type(1) + button
INSERT: button:nth-of-type(2)::text("2:")
INSERT: span::text("done")
REMOVE: ::text("loading")
INSERT: span
```

# Update
```html
<span>
  done
</span>
<button>
  1:1
</button>
<button>
  2:2
</button>
```
## Change
```
INSERT: button:nth-of-type(2)::text@0 + ::text("2")
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  done
</span>
<button>
  2:2
</button>
```
## Change
```
REMOVE: span + button
```
