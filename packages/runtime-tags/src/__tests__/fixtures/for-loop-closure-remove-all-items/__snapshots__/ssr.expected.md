# Write
```html
  <div><button>Test</button><!--M_*2 #button/0--><!--M_|1 #text/0 2--><div></div><!--M_*1 #div/1--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={items:["hello"]},{_:_.a,"#LoopKey":0}]),"__tests__/template.marko_1_items",2];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <button>
        Test
      </button>
      <!--M_*2 #button/0-->
      <!--M_|1 #text/0 2-->
      <div />
      <!--M_*1 #div/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          items: ["hello"]
        },
        {
          _: _.a,
          "#LoopKey": 0
        }]),
        "__tests__/template.marko_1_items",
        2
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
INSERT html/body/div/button
INSERT html/body/div/button/#text
INSERT html/body/div/#comment0
INSERT html/body/div/#comment1
INSERT html/body/div/div
INSERT html/body/div/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```