# Write
```html
  <button></button><!--M_*1 #button/0--><!--M_[2--><div>Id is <!>dynamic<!--M_*2 #text/0--></div><!--M_]1 #text/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={1:{tagName:_._["__tests__/tags/child.marko"],"#text/1!":_.a={},"#text/1(":"__tests__/tags/child.marko"},2:_.a}),1,"__tests__/template.marko_0_tagName",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      Id is 
      <!---->
      dynamic
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{tagName:_._["__tests__/tags/child.marko"],"#text/1!":_.a={},"#text/1(":"__tests__/tags/child.marko"},2:_.a}),1,"__tests__/template.marko_0_tagName",0];M._.w()
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
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/div
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```