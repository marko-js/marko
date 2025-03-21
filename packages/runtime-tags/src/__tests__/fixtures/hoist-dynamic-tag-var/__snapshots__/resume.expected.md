# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <!--M_[4-->
    <div>
      Hello world
    </div>
    <!--M_*4 #div/0-->
    <!--M_]3 #text/0-->
    <!--M_|2 #text/0 3-->
    <!--M_|1 #text/0 2-->
    <!--M_[8-->
    <div>
      Hello world
    </div>
    <!--M_*8 #div/0-->
    <!--M_]7 #text/0-->
    <!--M_[11-->
    <div>
      Hello world
    </div>
    <!--M_*11 #div/0-->
    <!--M_]10 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.k={1:_.c={input_show:!0,"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.d={"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.a={"#scopeOffset/1":5,"ConditionalScope:#text/0":_.b={},"ConditionalRenderer:#text/0":"__tests__/tags/child.marko",setHtml:_._["__tests__/tags/child.marko_0/_return"](_.b)}},"#childScope/1":_.e={},"ConditionalScope:#text/2":_.f={"#scopeOffset/1":9,"ConditionalScope:#text/0":_.g={},"ConditionalRenderer:#text/0":"__tests__/tags/child.marko",setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.g)},"ConditionalScope:#text/3":_.h={"#scopeOffset/1":12,"ConditionalScope:#text/0":_.i={},"ConditionalRenderer:#text/0":"__tests__/tags/child.marko",setHtml3:_._["__tests__/tags/child.marko_0/_return"](_.i)},"ConditionalScope:#text/4":_.j={}},2:_.d,3:_.a,4:_.b,6:_.e,7:_.f,8:_.g,10:_.h,11:_.i,13:_.j},_.b["/TagVariable"]=_._["__tests__/template.marko_2_setHtml/var"](_.a),_.d._=_.j._=_.c,_.e.input_value=_._["__tests__/template.marko_0__hoisted_setHtml/hoist"](_.c),_.g["/TagVariable"]=_._["__tests__/template.marko_3_setHtml2/var"](_.f),_.i["/TagVariable"]=_._["__tests__/template.marko_4_setHtml3/var"](_.h),_.k),6,"__tests__/tags/thing.marko_0_input_value",13,"__tests__/template.marko_5",1,"__tests__/template.marko_0"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/#text0
INSERT html/body/#text1
INSERT html/body/div2/#text
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```