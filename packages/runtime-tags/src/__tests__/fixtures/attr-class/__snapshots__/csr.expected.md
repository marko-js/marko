# Render `{"c":true,"d":true}`

```html
<div
  class="a b d"
/>
<div
  class="a b"
/>
<div
  class="a b c"
/>
<div
  class="a b d"
/>
<!---->
<div
  class="a b"
/>
<!---->
<div
  class="a b d"
/>
<div
  class="a b d"
  id="test"
>
  Hello
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div0, div1, div2, div3, #text0, #comment0, div4, #text1, #comment1, div5, div6, #comment2, #comment3
```

# Render `{"c":false,"d":false}`

```html
<div
  class="a"
/>
<div
  class="a b"
/>
<div
  class="a b c"
/>
<div
  class="a"
/>
<!---->
<div
  class="a b"
/>
<!---->
<div
  class="a"
/>
<div
  class="a"
  id="test"
>
  Hello
</div>
<!---->
<!---->
```

# Mutations
```
UPDATE div0[class] "a b d" => "a"
UPDATE div0[class] "a d" => "a"
UPDATE div3[class] "a b d" => "a"
UPDATE div5[class] "a b d" => "a"
UPDATE div6[class] "a b d" => "a"
```