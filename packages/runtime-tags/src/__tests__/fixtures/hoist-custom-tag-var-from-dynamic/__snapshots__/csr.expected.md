# Render `{"show":true}`

```html
<!---->
<!---->
<div>
  Hoist from custom tag
</div>
<div>
  Hoist from custom tag
</div>
<!---->
<!---->
<!---->
<!---->
<div>
  Hoist from dynamic tag
</div>
<div />
<!---->
<!---->
<!---->
<!---->
<div />
<div />
<!---->
<!---->
<!---->
<section>
  <div>
    Hoist from dynamic tag
  </div>
</section>
<!---->
```

# Mutations
```
INSERT #comment0, #comment1, div0, div1, #comment2, #comment3, #comment4, #comment5, div2, div3, #comment6, #comment7, #comment8, #comment9, div4, div5, #comment10, #comment11, #comment12, section, #comment13
INSERT div0/#text
INSERT div1/#text
INSERT div2/#text
INSERT section/div/#text
```