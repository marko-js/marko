# Write
```html
  <button>0<!--M_*1 #text/1--> <!>0<!--M_*1 #text/2--></button><!--M_*1 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{count:0}]),"__tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*1 #text/1-->
       
      <!---->
      0
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          count: 0
        }]),
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
INSERT html/body/button/#text0
INSERT html/body/button/#comment0
INSERT html/body/button/#text1
INSERT html/body/button/#comment1
INSERT html/body/button/#text2
INSERT html/body/button/#comment2
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```