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
REMOVE: ::text("loading")
INSERT: span
INSERT: button:nth-of-type(1)::text("1")
UPDATE: button:nth-of-type(1)::text@2 " " => "1"
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
REMOVE: button
```
