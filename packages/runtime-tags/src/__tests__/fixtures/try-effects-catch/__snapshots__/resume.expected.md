# Render
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
    <div>
      This is good
    </div>
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ConditionalScope:#text/1":_.b={"#BranchAccessor":"#text/1"}},_.b,{}],_.b["#CatchContent"]=_._["__tests__/template.marko_2_renderer"](_.a),_.c),1,"__tests__/template.marko_0"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div1/#text
```