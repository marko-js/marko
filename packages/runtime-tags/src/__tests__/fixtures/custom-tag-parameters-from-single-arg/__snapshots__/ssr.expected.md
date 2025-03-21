# Write
```html
  <button class=inc>1<!--M_*2 #text/1--></button><!--M_*2 #button/0--><!--M_[3--><div>Count: <!>1<!--M_*3 #text/0--></div><!--M_]2 #text/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={2:{input_content:_._["__tests__/template.marko_1_renderer"](_.a={}),x:1,"ConditionalScope:#text/2":_.b={},"ConditionalRenderer:#text/2":"__tests__/template.marko_1_renderer"},3:_.b}),2,"__tests__/tags/custom-tag.marko_0_x"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      1
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_[3-->
    <div>
      Count: 
      <!---->
      1
      <!--M_*3 #text/0-->
    </div>
    <!--M_]2 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={2:{input_content:_._["__tests__/template.marko_1_renderer"](_.a={}),x:1,"ConditionalScope:#text/2":_.b={},"ConditionalRenderer:#text/2":"__tests__/template.marko_1_renderer"},3:_.b}),2,"__tests__/tags/custom-tag.marko_0_x"];M._.w()
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
INSERT html/body/button/#comment
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