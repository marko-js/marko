# Write
```html
  <div><button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0--><!--0 + 0 = 0--><!--M_*1 #comment/2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={1:{count:0}}),1,"__tests__/template.marko_0_count",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <button>
        0
        <!--M_*1 #text/1-->
      </button>
      <!--M_*1 #button/0-->
      <!--0 + 0 = 0-->
      <!--M_*1 #comment/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{count:0}}),1,"__tests__/template.marko_0_count",0];M._.w()
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
INSERT html/body/div/button
INSERT html/body/div/button/#text
INSERT html/body/div/button/#comment
INSERT html/body/div/#comment0
INSERT html/body/div/#comment1
INSERT html/body/div/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```