# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <div>
      Hello world
    </div>
    <!--M_*4 #div/0-->
    <div>
      Hello world
    </div>
    <!--M_*7 #div/0-->
    <div>
      Hello world
    </div>
    <!--M_*9 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.j=[0,_.d={"ConditionalScope:#text/0":_.f={"ConditionalScope:#text/0":_.g={setHtml:_._["__tests__/tags/child.marko_0/_return"](_.a={})}},"ConditionalScope:#text/2":_.h={setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.b={})},"ConditionalScope:#text/3":_.i={setHtml3:_._["__tests__/tags/child.marko_0/_return"](_.c={})},"#childScope/1":_.e={}},_.f,_.g,_.a,_.e,_.h,_.b,_.i,_.c,{_:_.d}],_.e.input_value=_._["__tests__/template.marko_0_$hoisted_setHtml/hoist"](_.d),_.j),"__tests__/tags/thing.marko_0_input_value",5,"__tests__/template.marko_5",10,"__tests__/template.marko_0",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div2/#text
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```