# Render `{"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}`
```html
<div>
  abc
</div>
```

# Update `{"children":[{"id":1,"text":"a"},{"id":3,"text":"c"}]}`
```html
<div>
  ac
</div>
```
## Change
```
REMOVE: div::text@0 + ::text("b")
```

# Update `{"children":[{"id":4,"text":"d"},{"id":3,"text":"c"}]}`
```html
<div>
  dc
</div>
```
## Change
```
REMOVE: div::text("a")
INSERT: div::text("d")
```
