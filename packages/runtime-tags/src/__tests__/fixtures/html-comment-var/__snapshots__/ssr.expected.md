# Write
```html
  <div><!--Body Text--><!--M_*2 #comment/0-->&zwj;<!--M_*1 #text/1--></div><span><!--Body Text--><!--M_*3 #comment/0-->&zwj;<!--M_*1 #text/3--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d={1:_.a={"#childScope/0":_.b={},"#childScope/2":_.c={}},2:_.b,3:_.c},_.b["/"]=_._["__tests__/template.marko_0_divName/var"](_.a),_.c["/"]=_._["__tests__/template.marko_0_spanName/var"](_.a),_.d),2,"__tests__/tags/parent-el.marko_0",3,"__tests__/tags/parent-el.marko_0",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <!--Body Text-->
      <!--M_*2 #comment/0-->
      ‍
      <!--M_*1 #text/1-->
    </div>
    <span>
      <!--Body Text-->
      <!--M_*3 #comment/0-->
      ‍
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={"#childScope/0":_.b={},"#childScope/2":_.c={}},2:_.b,3:_.c},_.b["/"]=_._["__tests__/template.marko_0_divName/var"](_.a),_.c["/"]=_._["__tests__/template.marko_0_spanName/var"](_.a),_.d),2,"__tests__/tags/parent-el.marko_0",3,"__tests__/tags/parent-el.marko_0",0];M._.w()
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
INSERT html/body/div/#comment0
INSERT html/body/div/#comment1
INSERT html/body/div/#text
INSERT html/body/div/#comment2
INSERT html/body/span
INSERT html/body/span/#comment0
INSERT html/body/span/#comment1
INSERT html/body/span/#text
INSERT html/body/span/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```