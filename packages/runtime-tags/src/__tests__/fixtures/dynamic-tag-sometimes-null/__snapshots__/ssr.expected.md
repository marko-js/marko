# Write
```html
  <!--M_[-->Body Content<!--M_]1 #text/0 2--><button></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{"ConditionalScope:#text/0":_.a={},x:null},_.a]),"__tests__/template.marko_0_x",1];M._.w()</script>
```

# Render End
```html
<!--M_[-->
<html>
  <head />
  <body>
    Body Content
    <!--M_]1 #text/0 2-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          "ConditionalScope:#text/0": _.a = {},
          x: null
        }, _.a]),
        "__tests__/template.marko_0_x",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```