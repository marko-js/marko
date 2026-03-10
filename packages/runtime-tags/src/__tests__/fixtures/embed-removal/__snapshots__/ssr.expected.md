# Write
```html
  <button>Cleanup</button><!--Membedded*1 #button/0--><script>WALKER_RUNTIME("M")("embedded");(M.embedded.b={})["__tests__/template.marko"]=1;M.embedded.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M.embedded.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      Cleanup
    </button>
    <!--Membedded*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("embedded");
      (M.embedded.b = {})[
        "__tests__/template.marko"
        ] = 1;
      M.embedded.r = [_ =&gt; (_.a = [0]),
        "__tests__/template.marko_0 1"
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
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```