# Write
```html
  <button>0<!--M_*2 #text/1--></button><!--M_*2 #button/0--><!--M_|1 #text/0 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d={1:_.b={num:0,"#text/0(":new Map(_.a=[[0,_.c={}]])},2:_.c},_.c._=_.b,_.d),2,"__tests__/template.marko_1_num"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_|1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.b={num:0,"#text/0(":new Map(_.a=[[0,_.c={}]])},2:_.c},_.c._=_.b,_.d),2,"__tests__/template.marko_1_num"];M._.w()
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
INSERT html/body/script
INSERT html/body/script/#text
```