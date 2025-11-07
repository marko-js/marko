# Write
```html
  <div class=foo><!--M_[-->default<!--M_]3 #div/0 4--></div><!--M_'2 #text/0 3--><span class=foo><!--M_[-->default<!--M_]6 #span/0 7--></span><!--M_'5 #text/0 6--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,1,_.a={"ConditionalRenderer:#text/0":"div",inputContent:_.d={},htmlInput:{}},{"ConditionalRenderer:#div/0":"__tests__/tags/my-tag.marko_1_content"},1,_.b={"ConditionalRenderer:#text/0":"span",inputAs:"span",htmlInput:{}},{"ConditionalRenderer:#span/0":"__tests__/tags/my-tag.marko_1_content"}],_.a.inputContent=_._["__tests__/template.marko_1_content"](_.d),_.b.inputContent=_._["__tests__/template.marko_2_content"](_.d),_.c),"__tests__/tags/my-tag.marko_0_inputContent",2,5];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
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
      M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
          "ConditionalRenderer:#text/0": "div",
          inputContent: _.d = {},
          htmlInput:
          {}
        },
        {
          "ConditionalRenderer:#div/0": "__tests__/tags/my-tag.marko_1_content"
        }, 1, _.b = {
          "ConditionalRenderer:#text/0": "span",
          inputAs: "span",
          htmlInput:
          {}
        },
        {
          "ConditionalRenderer:#span/0": "__tests__/tags/my-tag.marko_1_content"
        }], _.a.inputContent = _._[
          "__tests__/template.marko_1_content"
          ](_.d), _.b.inputContent = _._[
          "__tests__/template.marko_2_content"
          ](_.d), _.c),
        "__tests__/tags/my-tag.marko_0_inputContent",
        2, 5
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/#comment0
INSERT html/body/div/#text
INSERT html/body/div/#comment1
INSERT html/body/#comment0
INSERT html/body/span
INSERT html/body/span/#comment0
INSERT html/body/span/#text
INSERT html/body/span/#comment1
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```