# Write
```html
  <div>&zwj;<!--M_*1 #text/0--></div><div>&zwj;<!--M_*1 #text/1--></div><button>Update</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{index:-1}]),"__tests__/template.marko_0_index",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      ‍
      <!--M_*1 #text/0-->
    </div>
    <div>
      ‍
      <!--M_*1 #text/1-->
    </div>
    <button>
      Update
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          index: -1
        }]),
        "__tests__/template.marko_0_index",
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
INSERT html/body/div0
INSERT html/body/div0/#text
INSERT html/body/div0/#comment
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/div1/#comment
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```