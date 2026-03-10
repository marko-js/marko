# Write
```html
  <button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0--><!--M_[--><!--M_]2 #text/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{count:0,"#childScope/2":_.a={}},_.a]),"__tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_]2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          count: 0,
          "#childScope/2": _.a = {}
        }, _.a]),
        "__tests__/template.marko_0_count 1"
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
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```