# Write
```html
  <button></button><!--M_*1 #button/0--><span>hi<!--M_*2 #text/0--></span><!--M_|1 #text/1 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={show:!0,message:"hi"},{_:_.a}]),"__tests__/template.marko_0_show 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <span>
      hi
      <!--M_*2 #text/0-->
    </span>
    <!--M_|1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          show: !0,
          message: "hi"
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_0_show 1"
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
INSERT html/body/#comment0
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```