# Write
```html
  <div id=el></div><div><button>Click</button><!--M_*2 #button/0--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{"#LoopKey":0}]),"__tests__/template.marko_1 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      id="el"
    />
    <div>
      <button>
        Click
      </button>
      <!--M_*2 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
        {
          "#LoopKey": 0
        }]),
        "__tests__/template.marko_1 2"
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
INSERT html/body/div1
INSERT html/body/div1/button
INSERT html/body/div1/button/#text
INSERT html/body/div1/#comment
INSERT html/body/script
INSERT html/body/script/#text
```