# Write
```html
  <button>Toggle</button><!--M_*1 #button/0--><div></div><!--M_*1 #div/1--><div>child</div><!--M_$3--><!--M_|1 #text/2 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={"show/3":!0,"#text/2(":0,"#text/2!":_.b={}},2:_.b,3:{"input/1":{write:_._["__tests__/template.marko_1/write"](_.b)}}},_.b._=_.a,_.c),3,"__tests__/tags/child.marko_0_input",1,"__tests__/template.marko_0_show",0];M._.w()</script>
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
    <div />
    <!--M_*1 #div/1-->
    <div>
      child
    </div>
    <!--M_$3-->
    <!--M_|1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"show/3":!0,"#text/2(":0,"#text/2!":_.b={}},2:_.b,3:{"input/1":{write:_._["__tests__/template.marko_1/write"](_.b)}}},_.b._=_.a,_.c),3,"__tests__/tags/child.marko_0_input",1,"__tests__/template.marko_0_show",0];M._.w()
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
INSERT html/body/div0
INSERT html/body/#comment1
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/body/script
INSERT html/body/script/#text
```