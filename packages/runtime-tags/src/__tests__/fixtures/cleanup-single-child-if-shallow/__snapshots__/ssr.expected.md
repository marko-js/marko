# Write
```html
  <button>Toggle</button><!--M_*1 #button/0--><div></div><!--M_*1 #div/1--><div>child</div><!--M_|1 #text/2 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalRenderer:#text/2":0,"ConditionalScope:#text/2":_.b={},show:!0},_.b,{input:{write:_._["__tests__/template.marko_1/write"](_.b)},"#ClosestBranchId":2}],_.b._=_.a,_.c),"__tests__/tags/child.marko_0_input",3,"__tests__/template.marko_0_show",1];M._.w()</script>
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
    <!--M_|1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ConditionalRenderer:#text/2":0,"ConditionalScope:#text/2":_.b={},show:!0},_.b,{input:{write:_._["__tests__/template.marko_1/write"](_.b)},"#ClosestBranchId":2}],_.b._=_.a,_.c),"__tests__/tags/child.marko_0_input",3,"__tests__/template.marko_0_show",1];M._.w()
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
INSERT html/body/script
INSERT html/body/script/#text
```