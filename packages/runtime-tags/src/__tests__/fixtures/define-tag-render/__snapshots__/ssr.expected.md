# Write
```html
  <div>Hello <!>Ryan<!--M_*2 #text/0--> <!>1<!--M_*2 #text/1--></div><button>1<!--M_*2 #text/3--></button><!--M_*2 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{y:1}]),2,"__tests__/template.marko_1_y"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      Hello 
      <!---->
      Ryan
      <!--M_*2 #text/0-->
       
      <!---->
      1
      <!--M_*2 #text/1-->
    </div>
    <button>
      1
      <!--M_*2 #text/3-->
    </button>
    <!--M_*2 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,1,{y:1}]),2,"__tests__/template.marko_1_y"];M._.w()
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
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```