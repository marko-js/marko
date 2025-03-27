# Write
```html
  <div>x=<span>0<!--M_*1 #text/0--></span>, was=<!>&zwj;<!--M_*1 #text/1--></div><button id=increment>Increment</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{x:0}]),1,"__tests__/template.marko_0_x"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        0
        <!--M_*1 #text/0-->
      </span>
      , was=
      <!---->
      ‍
      <!--M_*1 #text/1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{x:0}]),1,"__tests__/template.marko_0_x"];M._.w()
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
INSERT html/body/div/span
INSERT html/body/div/span/#text
INSERT html/body/div/span/#comment
INSERT html/body/div/#text1
INSERT html/body/div/#comment0
INSERT html/body/div/#text2
INSERT html/body/div/#comment1
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```