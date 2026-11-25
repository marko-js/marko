# Render

# Update
```html
loading...
```
## Change
```
INSERT: ::text("loading...")
```

# Update
```js
after(1)();
```
## Error
```
ERROR!
```

# Update
```html
<p>
  sibling
</p>
```
## Change
```
REMOVE: ::text("loading...")
INSERT: p
```
