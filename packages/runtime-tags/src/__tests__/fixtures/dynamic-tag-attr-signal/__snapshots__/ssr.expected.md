# Write
```html
  <p class=A>paragraph</p><!--M_*1 #p/0--><button></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{className:"A"}]),1,"__tests__/template.marko_0_className"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <p
      class="A"
    >
      paragraph
    </p>
    <!--M_*1 #p/0-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{className:"A"}]),1,"__tests__/template.marko_0_className"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/p
INSERT html/body/p/#text
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```