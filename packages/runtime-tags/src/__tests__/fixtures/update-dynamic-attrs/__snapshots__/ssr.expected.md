# Write
```html
  <div a=1 b=2></div><!--M_*0 #div/0--><div a=1 b=2></div><!--M_*0 #div/1--><div a=0 b=2></div><!--M_*0 #div/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={0:{input_value:{a:1,b:2},a:0}}),0,"__tests__/template.marko_0_input_value_a",0,"__tests__/template.marko_0_input_value",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      a="1"
      b="2"
    />
    <!--M_*0 #div/0-->
    <div
      a="1"
      b="2"
    />
    <!--M_*0 #div/1-->
    <div
      a="0"
      b="2"
    />
    <!--M_*0 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{input_value:{a:1,b:2},a:0}}),0,"__tests__/template.marko_0_input_value_a",0,"__tests__/template.marko_0_input_value",0];M._.w()
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
INSERT html/body/div2
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```