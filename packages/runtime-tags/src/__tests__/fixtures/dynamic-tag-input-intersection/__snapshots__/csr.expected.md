# Render
```html
<!---->
<!---->
<div
  class="foo"
>
  default
</div>
<!---->
<!---->
<span
  class="foo"
>
  default
</span>
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #comment1, div, #comment2, #comment3, span, #comment4, #comment5
```

# Render ASYNC
```html
<!---->
<!---->
<div
  class="foo"
>
  Div
</div>
<!---->
<!---->
<span
  class="foo"
>
  Span
</span>
<!---->
<!---->
```

# Mutations
```
REMOVE #text in span
INSERT span/#text
REMOVE #text in div
INSERT div/#text
```