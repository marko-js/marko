# Render `{"show":true}`

```html
<!---->
<!---->
<!---->
<div>
  Hoist from custom tag
</div>
<!---->
<!---->
<div>
  Hoist from custom tag
</div>
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<div>
  Hoist from dynamic tag
</div>
<!---->
<!---->
<div />
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<div />
<!---->
<!---->
<div />
<!---->
<!---->
<!---->
<!---->
<section>
  <!---->
  <div>
    Hoist from dynamic tag
  </div>
  <!---->
</section>
<!---->
```

# Mutations
```
INSERT #comment0, #comment1, #comment2, div0, #comment3, #comment4, div1, #comment5, #comment6, #comment7, #comment8, #comment9, #comment10, div2, #comment11, #comment12, div3, #comment13, #comment14, #comment15, #comment16, #comment17, #comment18, div4, #comment19, #comment20, div5, #comment21, #comment22, #comment23, #comment24, section, #comment25
INSERT div0/#text
INSERT div1/#text
INSERT div2/#text
INSERT section/div/#text
```