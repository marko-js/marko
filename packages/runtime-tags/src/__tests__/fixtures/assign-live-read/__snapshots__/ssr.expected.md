# Write
```html
  <button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0--><button></button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={count:0}],_.a.resetCount=_._["__tests__/template.marko_0/resetCount"](_.a),_.b),"__tests__/template.marko_0_resetCount 1 __tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button />
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0
        }], _.a.resetCount = _._[
          "__tests__/template.marko_0/resetCount"
          ](_.a), _.b),
        "__tests__/template.marko_0_resetCount 1 __tests__/template.marko_0_count 1"
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
INSERT html/body/button0
INSERT html/body/button0/#text
INSERT html/body/button0/#comment
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```