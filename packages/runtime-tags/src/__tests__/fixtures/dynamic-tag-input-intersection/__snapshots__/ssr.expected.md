# Write
```html
  <div class=foo><!--M_[-->default<!--M_]3 #div/0 4--></div><!--M_'2 #text/0 3--><span class=foo><!--M_[-->default<!--M_]6 #span/0 7--></span><!--M_'5 #text/0 6--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,1,_.a={"ConditionalRenderer:#text/0":"div",inputContent:_.e={},htmlInput:{}},{"ConditionalRenderer:#div/0":_.c="__tests__/tags/my-tag.marko_1_content"},1,_.b={"ConditionalRenderer:#text/0":"span",inputAs:"span",htmlInput:{}},{"ConditionalRenderer:#span/0":_.c}],_.a.inputContent=_._["__tests__/template.marko_1_content"](_.e),_.b.inputContent=_._["__tests__/template.marko_2_content"](_.e),_.d),"__tests__/tags/my-tag.marko_0_inputContent 2 5"];M._.w()</script>
```

# Render End
```html
<div
  class="foo"
>
  <!--M_[-->
  default
  <!--M_]3 #div/0 4-->
</div>
<!--M_'2 #text/0 3-->
<span
  class="foo"
>
  <!--M_[-->
  default
  <!--M_]6 #span/0 7-->
</span>
<!--M_'5 #text/0 6-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, 1, _.a = {
      "ConditionalRenderer:#text/0": "div",
      inputContent: _.e = {},
      htmlInput:
      {}
    },
    {
      "ConditionalRenderer:#div/0": _.c =
        "__tests__/tags/my-tag.marko_1_content"
    }, 1, _.b = {
      "ConditionalRenderer:#text/0": "span",
      inputAs: "span",
      htmlInput:
      {}
    },
    {
      "ConditionalRenderer:#span/0": _.c
    }], _.a.inputContent = _._[
      "__tests__/template.marko_1_content"
      ](_.e), _.b.inputContent = _._[
      "__tests__/template.marko_2_content"
      ](_.e), _.d),
    "__tests__/tags/my-tag.marko_0_inputContent 2 5"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT div/#comment0
INSERT div/#text
INSERT div/#comment1
INSERT #comment0
INSERT span
INSERT span/#comment0
INSERT span/#text
INSERT span/#comment1
INSERT #comment1
INSERT script
INSERT script/#text
```