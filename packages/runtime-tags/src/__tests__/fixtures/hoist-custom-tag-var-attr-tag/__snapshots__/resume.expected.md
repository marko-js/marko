# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <!--M_[3-->
    <div>
      Hoist from custom tag
    </div>
    <!--M_*4 #div/0-->
    <!--M_]2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={"ClosureScopes:1":_.e=new Set},2:{"ConditionalScope:#text/0":_.b={"#scopeOffset/1":5,"#childScope/0":_.c={},setHtml:_._["__tests__/tags/child.marko_0/_return"](_.c)},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},3:_.b,4:_.c},_.a._hoisted_setHtml=_._["__tests__/template.marko_0__hoisted_setHtml/hoist"](_.a),_.c["/TagVariable"]=_._["__tests__/template.marko_1_setHtml/var"](_.b),(_.e).add(_.b),_.d),1,"__tests__/template.marko_0__hoisted_setHtml"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/div/#text
```