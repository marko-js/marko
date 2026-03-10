# Write
```html
  <button id=toggle>Toggle</button><!--Membedded*1 #button/0--><button id=cleanup>Cleanup</button><!--Membedded*1 #button/1--><div>Hello</div><!--Membedded|1 #text/2 2--><script>WALKER_RUNTIME("M")("embedded");(M.embedded.b={})["__tests__/template.marko"]=1;M.embedded.r=[_=>(_.a=[0,{}]),"__tests__/template.marko_0_hide 1 __tests__/template.marko_0 1"];M.embedded.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button
      id="toggle"
    >
      Toggle
    </button>
    <!--Membedded*1 #button/0-->
    <button
      id="cleanup"
    >
      Cleanup
    </button>
    <!--Membedded*1 #button/1-->
    <div>
      Hello
    </div>
    <!--Membedded|1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("embedded");
      (M.embedded.b = {})[
        "__tests__/template.marko"
        ] = 1;
      M.embedded.r = [_ =&gt; (_.a = [0,
        {}]),
        "__tests__/template.marko_0_hide 1 __tests__/template.marko_0 1"
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
INSERT html/body/button0
INSERT html/body/button0/#text
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/button1/#text
INSERT html/body/#comment1
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```