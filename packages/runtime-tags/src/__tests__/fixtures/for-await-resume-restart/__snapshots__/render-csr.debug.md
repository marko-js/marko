# Render
```html
<ul />
```

# Update
```html
Waiting...
```
## Change
```
INSERT: ::text("Waiting...")
REMOVE: ::text + ul
```

# Update
```html
<ul>
  <li>
    #0: a
  </li>
  <li>
    #1: b
  </li>
  <li>
    #2: hello
  </li>
</ul>
```
## Change
```
INSERT: ul
REMOVE: ul + ::text("Waiting...")
```
