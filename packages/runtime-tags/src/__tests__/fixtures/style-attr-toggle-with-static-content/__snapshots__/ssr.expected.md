# Write
```html
  <button></button><!--M_*1 #button/0--><div style="border:1px solid black">foo bar</div><!--M_*1 #div/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{open:!0}]),"__tests__/template.marko_0_open",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <div
      style="border:1px solid black"
    >
      foo bar
    </div>
    <!--M_*1 #div/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          open: !0
        }]),
        "__tests__/template.marko_0_open",
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
INSERT html/body/#comment0
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```