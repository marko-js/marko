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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.k=[0,_.b={"ConditionalScope:#text/0":_.c={"ConditionalScope:#text/0":_.h={setHtml:_._["__tests__/tags/child.marko_0/_return"](_.a={})}},"ConditionalScope:#text/2":_.i={setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.d={})},"ConditionalScope:#text/3":_.j={setHtml3:_._["__tests__/tags/child.marko_0/_return"](_.e={})},"ConditionalScope:#text/4":_.f={},"#childScope/1":_.g={}},_.c,_.h,_.a,_.g,_.i,_.d,_.j,_.e,_.f],_.c._=_.f._=_.b,_.g.input_value=_._["__tests__/template.marko_0_$hoisted_setHtml/hoist"](_.b),_.k),5,"__tests__/tags/thing.marko_0_input_value",10,"__tests__/template.marko_5",1,"__tests__/template.marko_0"];M._.w()
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