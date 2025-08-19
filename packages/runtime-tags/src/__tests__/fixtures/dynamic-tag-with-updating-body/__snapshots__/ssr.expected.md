# Write
```html
  <div><!--M_[3--><button id=count>0<!--M_*4 #text/1--></button><!--M_*4 #button/0--><!--M_]2 #div/0--></div><!--M_'1 #text/0 2--><button id=changeTag></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,{"ConditionalScope:#text/0":_.a={"ConditionalScope:#div/0":_.b={},"ConditionalRenderer:#div/0":"__tests__/template.marko_1_renderer"},"ConditionalRenderer:#text/0":"div",tagName:"div"},_.a,_.b,{count:0,"#ClosestBranchId":3}]),"__tests__/tags/counter.marko_0_count",4,"__tests__/template.marko_0_tagName",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[3-->
      <button
        id="count"
      >
        0
        <!--M_*4 #text/1-->
      </button>
      <!--M_*4 #button/0-->
      <!--M_]2 #div/0-->
    </div>
    <!--M_'1 #text/0 2-->
    <button
      id="changeTag"
    />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0,
        {
          "ConditionalScope:#text/0": _.a = {
            "ConditionalScope:#div/0": _.b = {},
            "ConditionalRenderer:#div/0": "__tests__/template.marko_1_renderer"
          },
          "ConditionalRenderer:#text/0": "div",
          tagName: "div"
        }, _.a, _.b,
        {
          count: 0,
          "#ClosestBranchId": 3
        }]),
        "__tests__/tags/counter.marko_0_count",
        4,
        "__tests__/template.marko_0_tagName",
        1
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
INSERT html/body/div/button
INSERT html/body/div/button/#text
INSERT html/body/div/button/#comment
INSERT html/body/div/#comment1
INSERT html/body/div/#comment2
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```