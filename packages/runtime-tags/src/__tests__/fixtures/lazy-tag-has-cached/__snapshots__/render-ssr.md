# Render
```html
<button>
  Show B
</button>
<span>
  A
</span>
```

# Update
```html
<button>
  Show B
</button>
<span>
  A
</span>
```
## Change
```
REMOVE: body + m-1
```

# Update
## Console
```
LOG "loaded a"
```

# Update
```js
container.querySelector("button").click();
```

# Update
```html
<button>
  Show B
</button>
<span>
  A
</span>
<span>
  B
</span>
```
## Change
```
INSERT: span:nth-of-type(1) + span
```
## Console
```
LOG "loaded b"
```
