# Write
```html
  <button>Toggle</button><!--M_*1 #button/0--><pre></pre><!--M_*1 #pre/1--><div>child</div><!--M_|1 #text/2 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={"show/3":!0,"#text/2(":0,"#text/2!":_.b={}},2:_.b},_.b._=_.a,_.c),2,"__tests__/template.marko_1",1,"__tests__/template.marko_0_show",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <pre />
    <!--M_*1 #pre/1-->
    <div>
      child
    </div>
    <!--M_|1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"show/3":!0,"#text/2(":0,"#text/2!":_.b={}},2:_.b},_.b._=_.a,_.c),2,"__tests__/template.marko_1",1,"__tests__/template.marko_0_show",0];M._.w()
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
INSERT html/body/#comment0
INSERT html/body/pre
INSERT html/body/#comment1
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```