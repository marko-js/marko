# Write
```html
  <div></div><!--M_*4 #div/0--><div></div><!--M_*6 #div/0--><div></div><!--M_*8 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{},2,{item:1},1,{item:2},1,{item:3}]),"__tests__/template.marko_1_item 4 6 8"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*4 #div/0-->
    <div />
    <!--M_*6 #div/0-->
    <div />
    <!--M_*8 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {}, 2,
        {
          item: 1
        }, 1,
        {
          item: 2
        }, 1,
        {
          item: 3
        }]),
        "__tests__/template.marko_1_item 4 6 8"
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
INSERT html/body/#comment0
INSERT html/body/div1
INSERT html/body/#comment1
INSERT html/body/div2
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```