# Render
```html
<div
  class="child1 child2"
>
  works
</div>
```

# Mutations
```
INSERT div
UPDATE div[class] null => "child1 child2"
UPDATE div[class] "child1" => "child1 child2"
INSERT div/#text
```