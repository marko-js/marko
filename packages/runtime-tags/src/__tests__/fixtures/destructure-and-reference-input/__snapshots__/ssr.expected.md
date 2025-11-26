# Write
```html
  <div>1</div><!--M_*2 #div/0--><div>content</div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={value:1},{rest:{}},{_:_.a}]),"__tests__/tags/child.marko_0_rest 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      1
    </div>
    <!--M_*2 #div/0-->
    <div>
      content
    </div>
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
INSERT html/body/div0
INSERT html/body/div0/#text
INSERT html/body/#comment
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/script
INSERT html/body/script/#text
```