# Render `{"show":true}`

```html
<div
  class="child"
>
  works
</div>
```

# Mutations
```
INSERT div
UPDATE div[class] null => "child"
INSERT div/#text
```