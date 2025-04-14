# Write
```html
  <button>Toggle</button><!--M_*1 #button/0--><pre></pre><!--M_*1 #pre/1--><!--M_[2--><div>a</div><span>b</span><p>c</p><!--M_]1 #text/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalRenderer:#text/2":0,"ConditionalScope:#text/2":_.b={},show:!0},_.b],_.b._=_.a,_.c),"__tests__/template.marko_1",2,"__tests__/template.marko_0_show",1];M._.w()</script>
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
    <!--M_[2-->
    <div>
      a
    </div>
    <span>
      b
    </span>
    <p>
      c
    </p>
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ConditionalRenderer:#text/2":0,"ConditionalScope:#text/2":_.b={},show:!0},_.b],_.b._=_.a,_.c),"__tests__/template.marko_1",2,"__tests__/template.marko_0_show",1];M._.w()
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
INSERT html/body/#comment2
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/p
INSERT html/body/p/#text
INSERT html/body/#comment3
INSERT html/body/script
INSERT html/body/script/#text
```