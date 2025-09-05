# Write
```html
  <!--M_[--><div>Child 1 has <!>3<!--M_*2 #text/0--></div><!--M_]1 #text/0 2--><button></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"__tests__/tags/child1.marko",tagName:_._["__tests__/tags/child1.marko"],val:3},_.a]),"__tests__/template.marko_0_tagName",1];M._.w()</script>
```

# Render End
```html
<!--M_[-->
<html>
  <head />
  <body>
    <div>
      Child 1 has 
      <!---->
      3
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/0 2-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          "ConditionalScope:#text/0": _.a = {},
          "ConditionalRenderer:#text/0": "__tests__/tags/child1.marko",
          tagName: _._[
            "__tests__/tags/child1.marko"
            ],
          val: 3
        }, _.a]),
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
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```