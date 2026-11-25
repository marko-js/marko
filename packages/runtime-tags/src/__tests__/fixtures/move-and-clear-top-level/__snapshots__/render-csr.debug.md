# Render `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}`
```html
abc
```

# Update `{"children":[]}`
## Change
```
REMOVE: ::text("a")
REMOVE: ::text("b")
REMOVE: ::text("c")
```

# Update `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}`
```html
abc
```
## Change
```
INSERT: ::text("a")
INSERT: ::text("b")
INSERT: ::text("c")
```
