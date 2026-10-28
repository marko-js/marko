# Render `{"a":"a0","show":false,"flag":false}`
```html
<u>
  B
</u>
<i>
  no
</i>
```

# Update `{"a":"a1","show":true,"flag":true}`
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
INSERT: u
REMOVE: button + u
REMOVE: button + i
INSERT: u + button
```

# Update `{"a":"a2","show":true,"flag":false}`
```html
<u>
  B
</u>
<button>
  b
</button>
```
## Change
```
INSERT: u
REMOVE: button + u
REMOVE: button + button
INSERT: u + button
```
