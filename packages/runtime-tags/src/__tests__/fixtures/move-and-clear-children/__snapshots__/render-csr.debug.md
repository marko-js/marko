# Render `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}`
```html
<div>
  abc
</div>
```

# Update `{"children":[{"id":2,"text":"b"},{"id":3,"text":"c"},{"id":1,"text":"a"}]}`
```html
<div>
  bca
</div>
```
## Change
```
REMOVE: div::text("a")
INSERT: div::text@1 + ::text("a")
```

# Update `{"children":[]}`
```html
<div />
```
## Change
```
REMOVE: div > :is(::text("b"), ::text("c"), ::text("a"))
```
