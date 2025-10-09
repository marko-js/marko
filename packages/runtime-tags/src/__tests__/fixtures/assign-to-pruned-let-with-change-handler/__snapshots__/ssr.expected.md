# Write
```html
  <button>Before</button><!--M_*1 #button/0--><div>0<!--M_*1 #text/1--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={}],_.a["TagVariableChange:count"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),"__tests__/template.marko_0",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      Before
    </button>
    <!--M_*1 #button/0-->
    <div>
      0
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {}], _.a["TagVariableChange:count"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0",
        1
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
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/script
INSERT html/body/script/#text
```