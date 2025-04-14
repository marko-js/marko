# Write
```html
  <div></div><!--M_*1 #div/0--><!--M_[2-->ERROR!<!--M_*3 #text/0--><!--M_]1 #text/1--><div></div><!--M_*1 #div/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalScope:#text/1":_.b={"#BranchAccessor":"#text/1"}},_.b,{}],_.b["#CatchContent"]=_._["__tests__/template.marko_2_renderer"](_.a),_.c),"__tests__/template.marko_0",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*1 #div/0-->
    <!--M_[2-->
    ERROR!
    <!--M_*3 #text/0-->
    <!--M_]1 #text/1-->
    <div />
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ConditionalScope:#text/1":_.b={"#BranchAccessor":"#text/1"}},_.b,{}],_.b["#CatchContent"]=_._["__tests__/template.marko_2_renderer"](_.a),_.c),"__tests__/template.marko_0",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div0
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#text
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/body/div1
INSERT html/body/#comment4
INSERT html/body/script
INSERT html/body/script/#text
```