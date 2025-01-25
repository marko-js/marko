# Render
```html
<div>
  <!--Body Text-->
  ‍
</div>
<span>
  <!--Body Text-->
  ‍
</span>
```

# Mutations
```
INSERT div, span
```

# Render ASYNC
```html
<div>
  <!--Body Text-->
  DIV
</div>
<span>
  <!--Body Text-->
  SPAN
</span>
```

# Mutations
```
UPDATE div/#text "‍" => "DIV"
UPDATE span/#text "‍" => "SPAN"
```