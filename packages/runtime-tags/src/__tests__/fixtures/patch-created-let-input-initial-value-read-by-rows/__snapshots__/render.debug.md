# Render `{"show":true,"i":0}`
```html
<button>
  *1
</button>
<button>
  2
</button>
```

# Update `{"show":false,"i":0}`
## Change
```
REMOVE: button
REMOVE: button
```

# Update `{"show":true,"i":1}`
```html
<button>
  1
</button>
<button>
  *2
</button>
```
## Change
```
INSERT: button
INSERT: button:nth-of-type(1) + button
UPDATE: button:nth-of-type(2)::text@0 "" => "*"
```

# Update
```js
document.querySelector("button:last-of-type").click();
```

# Update `{"show":true,"i":0}`
