# Write
  <div a=1 b=2></div><!--M_*0 #div/0--><div a=1 b=2></div><!--M_*0 #div/1--><div a=0 b=2></div><!--M_*0 #div/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={0:{input_value:{a:1,b:2},a:0}}),0,"packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input_value_a",0,"packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input_value",0];M._.w()</script>


# Render "End"
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{input_value:{a:1,b:2},a:0}}),0,"packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input_value_a",0,"packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input_value",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/div0
inserted #document/html0/body1/#comment1
inserted #document/html0/body1/div2
inserted #document/html0/body1/#comment3
inserted #document/html0/body1/div4
inserted #document/html0/body1/#comment5
inserted #document/html0/body1/script6
inserted #document/html0/body1/script6/#text0
```