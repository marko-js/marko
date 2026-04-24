# Write
```html
  <button class=inc>1<!--M_*2 #text/1--></button><!--M_*2 #button/0--><!--M_[--><div>Count (<!>hello<!--M_*3 #text/0-->): <!>1<!--M_*3 #text/1--></div><!--M_]2 #text/2 3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,1,_.a={"ConditionalRenderer:#text/2":"__tests__/template.marko_1_content",input_content:_.c={},input_name:"hello",x:1}],_.a.input_content=_._["__tests__/template.marko_1_content"](_.c),_.b),"__tests__/tags/custom-tag.marko_0_x 2"];M._.w()</script>
```

# Render End
```html
<button
  class="inc"
>
  1
  <!--M_*2 #text/1-->
</button>
<!--M_*2 #button/0-->
<!--M_[-->
<div>
  Count (
  <!---->
  hello
  <!--M_*3 #text/0-->
  ): 
  <!---->
  1
  <!--M_*3 #text/1-->
</div>
<!--M_]2 #text/2 3-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
      "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
      input_content: _.c = {},
      input_name: "hello",
      x: 1
    }], _.a.input_content = _._[
      "__tests__/template.marko_1_content"
      ](_.c), _.b),
    "__tests__/tags/custom-tag.marko_0_x 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button
INSERT button/#text
INSERT button/#comment
INSERT #comment0
INSERT #comment1
INSERT div
INSERT div/#text0
INSERT div/#comment0
INSERT div/#text1
INSERT div/#comment1
INSERT div/#text2
INSERT div/#comment2
INSERT div/#text3
INSERT div/#comment3
INSERT #comment2
INSERT script
INSERT script/#text
```