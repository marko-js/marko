# Write
```html
  <button class=inc>1<!--M_*2 #text/1--></button><!--M_*2 #button/0--><!--M_[--><div>Count (<!>hello<!--M_*3 #text/0-->): <!>1<!--M_*3 #text/1--></div><!--M_]2 #text/2 3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,1,{"ConditionalScope:#text/2":_.b={},"ConditionalRenderer:#text/2":"__tests__/template.marko_1_content",input_content:_._["__tests__/template.marko_1_content"](_.a={}),input_name:"hello",x:1},_.b]),"__tests__/tags/custom-tag.marko_0_x",2];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
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
      M._.r = [_ =&gt; (_.c = [0, 1,
        {
          "ConditionalScope:#text/2": _.b = {},
          "ConditionalRenderer:#text/2": "__tests__/template.marko_1_content",
          input_content: _._[
            "__tests__/template.marko_1_content"
            ](_.a = {}),
          input_name: "hello",
          x: 1
        }, _.b]),
        "__tests__/tags/custom-tag.marko_0_x",
        2
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
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/div
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/div/#text2
INSERT html/body/div/#comment2
INSERT html/body/div/#text3
INSERT html/body/div/#comment3
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```