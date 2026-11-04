# Render `{"a":"a0","show":true,"flag":false}`
```html
<u>
  B
</u>
<button>
  b
</button>
```

# Update `{"a":"a1","show":false,"flag":true}`
```html
<u>
  A
</u>
```
## Change
```
INSERT: u
REMOVE: u + u
REMOVE: u + button
```

# Update `{"a":"a2","show":true,"flag":true}`
```html
<u>
  A
</u>
<button>
  a
</button>
```
## Change
```
INSERT: u + button
```
