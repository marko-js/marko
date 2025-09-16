# Write
```html
  0<!--M_*2 #text/0--><button>Update</button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.b={}},_.b],_.b._=_.a,_.c),"__tests__/template.marko_0",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    0
    <!--M_*2 #text/0-->
    <button>
      Update
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalRenderer:#text/0": 0,
          "ConditionalScope:#text/0": _.b = {}
        }, _.b], _.b._ = _.a, _.c),
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
INSERT html/body/#text
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```