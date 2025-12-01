# Write
```html
  <div class=foo>1</div><!--M_*2 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={value:1},{rest:{}},{_:_.a}]),"__tests__/tags/child.marko_0_rest 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      class="foo"
    >
      1
    </div>
    <!--M_*2 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          value: 1
        },
        {
          rest:
          {}
        },
        {
          _: _.a
        }]),
        "__tests__/tags/child.marko_0_rest 2"
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
INSERT html/body/div/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```