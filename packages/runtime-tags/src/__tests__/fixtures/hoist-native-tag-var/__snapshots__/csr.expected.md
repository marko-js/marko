# Render `{"show":true}`

```html
<!---->
<!---->
<div
  class="child0 child1"
>
  Hello World
</div>
<!---->
<hr />
<div>
  Hello World
</div>
<!---->
```

# Mutations
```
INSERT #comment0, #comment1, div0, #comment2, hr, div1, #comment3
UPDATE div0[class] null => "child0 child1"
INSERT div0/#text
INSERT div1/#text
UPDATE div0[class] "child0" => "child0 child1"
```