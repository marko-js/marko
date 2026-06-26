# Render
```html
<button>
  Show B
</button>
```

# Update
```html
<button>
  Show B
</button>
```
## Change
```
REMOVE: body + marko-has-0
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
INSERT: button + span
```
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
