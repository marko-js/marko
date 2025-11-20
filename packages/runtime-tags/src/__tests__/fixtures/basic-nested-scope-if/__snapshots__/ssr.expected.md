# Write
```html
  <div><button>0<!--M_*2 #text/1--></button><!--M_*2 #button/0--><!--M_|1 #text/0 2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={clickCount:0},{_:_.a}]),"__tests__/template.marko_1_clickCount 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <button>
        0
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
      <!--M_|1 #text/0 2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          clickCount: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1_clickCount 2"
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
INSERT html/body/div/button/#comment
INSERT html/body/div/#comment0
INSERT html/body/div/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```