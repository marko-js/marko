# Write
  <button class=inc>1<!--Ms*1 #text/1-->,<!>10<!--Ms*1 #text/2--></button><!--Ms*1 #button/0--><!--Ms[2--><div>Counts: 1,10</div><!--Ms]1 #text/3--><script>WALKER_RUNTIME("M")("s");M.s.r=[_=>(_.b=[0,{"ConditionalScope:#text/3":_.a={},"ConditionalRenderer:#text/3":_._.$compat_renderBody,input_content:_._.$compat_renderBody,x:1,y:10},_.a]),"__tests__/components/custom-tag.marko_0_x_y",1];M.s.w()</script>

# Render End
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      1
      <!--Ms*1 #text/1-->
      ,
      <!---->
      10
      <!--Ms*1 #text/2-->
    </button>
    <!--Ms*1 #button/0-->
    <!--Ms[2-->
    <div>
      Counts: 1,10
    </div>
    <!--Ms]1 #text/3-->
    <script>
      WALKER_RUNTIME("M")("s");M.s.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/3":_.a={},"ConditionalRenderer:#text/3":_._.$compat_renderBody,input_content:_._.$compat_renderBody,x:1,y:10},_.a]),"__tests__/components/custom-tag.marko_0_x_y",1];M.s.w()
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
INSERT html/body/button/#text0
INSERT html/body/button/#comment0
INSERT html/body/button/#text1
INSERT html/body/button/#comment1
INSERT html/body/button/#text2
INSERT html/body/button/#comment2
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```