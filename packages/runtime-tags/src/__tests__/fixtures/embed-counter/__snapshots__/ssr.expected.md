# Write
```html
  <div><button>0<!--Membedded*1 #text/1--></button><!--Membedded*1 #button/0--></div><script>WALKER_RUNTIME("M")("embedded");(M.embedded.b={})["__tests__/template.marko"]=1;M.embedded.r=[_=>(_.a=[0,{clickCount:0}]),"__tests__/template.marko_0_clickCount 1"];M.embedded.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <button>
        0
        <!--Membedded*1 #text/1-->
      </button>
      <!--Membedded*1 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("embedded");
      (M.embedded.b = {})[
        "__tests__/template.marko"
        ] = 1;
      M.embedded.r = [_ =&gt; (_.a = [0,
        {
          clickCount: 0
        }]),
        "__tests__/template.marko_0_clickCount 1"
      ];
      M.embedded.w()
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
INSERT html/body/div/#comment
INSERT html/body/script
INSERT html/body/script/#text
```