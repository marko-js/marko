# Render `{"show":true}`

```html
<!---->
<!---->
<span>
  Hoist from custom tag
</span>
<span>
  Hoist from custom tag
</span>
<!---->
<!---->
<!---->
<!---->
<div
  class="outer inner"
/>
<div
  class="outer inner"
/>
<!---->
<!---->
<!---->
<!---->
<div
  class="outer inner"
/>
<div
  class="outer inner"
/>
<!---->
<!---->
<!---->
<section>
  <p>
    Hoist from dynamic tag
  </p>
</section>
<!---->
```

# Mutations
```
INSERT #comment0, #comment1, span0, span1, #comment2, #comment3, #comment4, #comment5, div0, div1, #comment6, #comment7, #comment8, #comment9, div2, div3, #comment10, #comment11, #comment12, section, #comment13
INSERT span0/#text
INSERT span1/#text
UPDATE div0[class] null => "outer inner"
UPDATE div1[class] null => "outer inner"
UPDATE div2[class] null => "outer inner"
UPDATE div3[class] null => "outer inner"
INSERT section/p/#text
UPDATE div0[class] "outer" => "outer inner"
UPDATE div1[class] "outer" => "outer inner"
UPDATE div2[class] "outer" => "outer inner"
UPDATE div3[class] "outer" => "outer inner"
```