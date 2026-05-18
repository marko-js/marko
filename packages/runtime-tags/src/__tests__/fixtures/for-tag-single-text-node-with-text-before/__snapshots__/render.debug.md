# Render
```html
<div
  data-children="1"
>
  Before Child
</div>
```

# Update
```html
<div
  data-children="2"
>
  Before ChildChild
</div>
```
## Change
```
UPDATE: div[data-children] "1" => "2"
INSERT: div::text@7 + ::text("Child")
```
