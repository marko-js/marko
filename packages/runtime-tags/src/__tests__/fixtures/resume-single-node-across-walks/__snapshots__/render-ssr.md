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
REMOVE: ::text("loading")
INSERT: span
INSERT: span::text("done")
INSERT: button:nth-of-type(1)::text("1")
INSERT: button:nth-of-type(2)
INSERT: button:nth-of-type(2)::text("2:")
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
INSERT: button:nth-of-type(2)::text("2")
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
REMOVE: button
```
