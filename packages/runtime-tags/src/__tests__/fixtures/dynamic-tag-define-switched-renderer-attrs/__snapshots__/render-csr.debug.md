# Render `{"x":1,"n":1,"t":"a"}`
```html
<span>
  1
</span>
a
```

# Update `{"x":2,"n":1,"t":"a"}`
```html
<span>
  1
</span>
b
```
## Change
```
INSERT: span + ::text("b")
REMOVE: ::text + ::text("a")
```

# Update `{"x":2,"n":2,"t":"b"}`
```html
<span>
  2
</span>
b
```
## Change
```
UPDATE: span::text "1" => "2"
```

# Update `{"x":1,"n":2,"t":"b"}`
```html
<span>
  2
</span>
a
```
## Change
```
INSERT: span + ::text("a")
REMOVE: ::text + ::text("b")
```
