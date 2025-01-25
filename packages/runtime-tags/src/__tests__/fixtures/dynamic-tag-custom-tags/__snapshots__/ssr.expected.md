# Write
```html
  <!--M_[1--><div>Child 1 has <!>3<!--M_*1 #text/0--></div><!--M_]0 #text/0--><button></button><!--M_*0 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={0:{tagName:_._["__tests__/tags/child1.marko"],val:3,"#text/0!":_.a={},"#text/0(":_._["__tests__/tags/child1.marko"]},1:_.a}),0,"__tests__/template.marko_0_tagName",0];M._.w()</script>
```

# Render End
```html
<!--M_[1-->
<html>
  <head />
  <body>
    <div>
      Child 1 has 
      <!---->
      3
      <!--M_*1 #text/0-->
    </div>
    <!--M_]0 #text/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{tagName:_._["__tests__/tags/child1.marko"],val:3,"#text/0!":_.a={},"#text/0(":_._["__tests__/tags/child1.marko"]},1:_.a}),0,"__tests__/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```