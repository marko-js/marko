# Write
```html
  <button>1<!--M_*1 #text/1--></button><!--M_*1 #button/0-->2<!--M_*1 #text/2--> <!>3<!--M_*1 #text/3--> <!>5<!--M_*1 #text/4--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{x:1}]),"__tests__/template.marko_0_x",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    2
    <!--M_*1 #text/2-->
     
    <!---->
    3
    <!--M_*1 #text/3-->
     
    <!---->
    5
    <!--M_*1 #text/4-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          x: 1
        }]),
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
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment0
INSERT html/body/#text0
INSERT html/body/#comment1
INSERT html/body/#text1
INSERT html/body/#comment2
INSERT html/body/#text2
INSERT html/body/#comment3
INSERT html/body/#text3
INSERT html/body/#comment4
INSERT html/body/#text4
INSERT html/body/#comment5
INSERT html/body/script
INSERT html/body/script/#text
```