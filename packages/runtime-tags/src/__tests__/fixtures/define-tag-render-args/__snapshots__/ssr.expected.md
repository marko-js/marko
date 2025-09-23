# Write
```html
  <div>[object Object]<!--M_*2 #text/0-->|<!>&zwj;<!--M_*2 #text/1-->|<!>&zwj;<!--M_*2 #text/2--></div><button>1<!--M_*1 #text/2--></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{x:1,"#childScope/0":_.a={}},_.a]),"__tests__/template.marko_0_x",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      [object Object]
      <!--M_*2 #text/0-->
      |
      <!---->
      ‍
      <!--M_*2 #text/1-->
      |
      <!---->
      ‍
      <!--M_*2 #text/2-->
    </div>
    <button>
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          x: 1,
          "#childScope/0": _.a = {}
        }, _.a]),
        "__tests__/template.marko_0_x",
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
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/div/#text2
INSERT html/body/div/#comment2
INSERT html/body/div/#text3
INSERT html/body/div/#comment3
INSERT html/body/div/#text4
INSERT html/body/div/#comment4
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```