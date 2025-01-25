# Write
```html
  <span class=A>body content</span><!--M_|0 #text/0 1--><button></button><!--M_*0 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={0:{tagName:"span",className:"A","#text/0!":_.a={},"#text/0(":"span"},1:_.a}),0,"__tests__/template.marko_0_tagName",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <span
      class="A"
    >
      body content
    </span>
    <!--M_|0 #text/0 1-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{tagName:"span",className:"A","#text/0!":_.a={},"#text/0(":"span"},1:_.a}),0,"__tests__/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```