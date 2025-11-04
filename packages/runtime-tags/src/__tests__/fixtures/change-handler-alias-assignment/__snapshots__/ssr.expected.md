# Write
```html
  <button>Before</button><!--M_*1 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={}],_.a.$fooChange=_._["__tests__/template.marko_0/fooBar"](_.a),_.b),"__tests__/template.marko_0_$fooChange",1];M._.w()</script>
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
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {}], _.a.$fooChange = _._[
          "__tests__/template.marko_0/fooBar"
          ](_.a), _.b),
        "__tests__/template.marko_0_$fooChange",
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
INSERT html/body/script
INSERT html/body/script/#text
```