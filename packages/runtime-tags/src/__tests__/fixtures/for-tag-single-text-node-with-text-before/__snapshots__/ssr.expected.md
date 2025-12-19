# Write
```html
  <div data-children=1>Before <!--M_[-->Child<!--M_]1 #text/1 2--></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{children:[1]},{}]),"__tests__/template.marko_0_children 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      data-children="1"
    >
      Before 
      <!--M_[-->
      Child
      <!--M_]1 #text/1 2-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          children: [1]
        },
        {}]),
        "__tests__/template.marko_0_children 1"
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
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```