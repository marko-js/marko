# Write
```html
  <div></div><!--M_*4 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,{"ClosureScopes:1":_.d=new Set},1,_.a={setHtml:_.b={}},_.b],_.a.setHtml=_._["__tests__/tags/child.marko_0/_return"](_.b),(_.d).add(_.a),_.c),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*4 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0,
        {
          "ClosureScopes:1": _.d = new Set
        }, 1, _.a = {
          setHtml: _.b = {}
        }, _.b], _.a.setHtml = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.b), (_.d).add(_.a), _.c),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
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
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```