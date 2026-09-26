# Render
```html
<button>
  1:
</button>
<button>
  2:
</button>
```

# Update
```html
loading
<button>
  1:
</button>
<button>
  2:
</button>
```
## Change
```
INSERT: ::text("loading")
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
INSERT: button:nth-of-type(1)::text@1 + ::text("1")
UPDATE: button:nth-of-type(1)::text@2 " " => "1"
INSERT: span
REMOVE: span + ::text("loading")
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
INSERT: button:nth-of-type(2)::text@1 + ::text("2")
UPDATE: button:nth-of-type(2)::text@2 " " => "2"
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
