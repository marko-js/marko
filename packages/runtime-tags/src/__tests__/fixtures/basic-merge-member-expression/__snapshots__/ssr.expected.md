# Write
```html
  <div></div><!--M_*0 #div/0--><div></div><!--M_*0 #div/1--><button>Click</button><!--M_*0 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[0,"__tests__/template.marko_0",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*0 #div/0-->
    <div />
    <!--M_*0 #div/1-->
    <button>
      Click
    </button>
    <!--M_*0 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[0,"__tests__/template.marko_0",0];M._.w()
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
INSERT html/body/#comment0
INSERT html/body/div1
INSERT html/body/#comment1
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```