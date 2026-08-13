# Render
```html
Waiting...
```

# Update
```html
Waiting...
```
## Change
```
INSERT: t > ul > li::text("#0: ")
INSERT: t > ul > li::text@0 + ::text("a")
```

# Update
```html
Waiting...
```
## Change
```
INSERT: t > ul > li:nth-of-type(2)::text("#1: ")
INSERT: t > ul > li:nth-of-type(2)::text@0 + ::text("b")
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
    #2: goodbye
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(3)::text("#2: ")
INSERT: ul > li:nth-of-type(3)::text@0 + ::text("goodbye")
REMOVE: ::text("Waiting...")
INSERT: ul
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
