# Render `{"color":"red"}`

```html
<div
  style="color:red"
/>
<div
  style="width:100px"
/>
<div
  style="color:green"
/>
<div
  style="color:red"
/>
<!---->
<div
  style="width:100px"
/>
<!---->
<div
  style="color:green"
/>
<!---->
<div
  style="color:green"
/>
<div
  id="test"
  style="color:green"
>
  Hello
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div0, div1, div2, div3, #text0, #comment0, div4, #text1, #comment1, div5, #text2, #comment2, div6, div7, #comment3, #comment4
```

# Render `{"color":"purple"}`

```html
<div
  style="color:purple"
/>
<div
  style="width:100px"
/>
<div
  style="color:green"
/>
<div
  style="color:purple"
/>
<!---->
<div
  style="width:100px"
/>
<!---->
<div
  style="color:green"
/>
<!---->
<div
  style="color:green"
/>
<div
  id="test"
  style="color:green"
>
  Hello
</div>
<!---->
<!---->
```

# Mutations
```
UPDATE div0[style] "color: red;" => "color: purple;"
UPDATE div3[style] "color:red" => "color:purple"
```