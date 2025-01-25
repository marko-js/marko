# Write
```html
  Hello<!--M_|0 #text/0 1-->World<!--M_|0 #text/1 2--><div>B<!--M_|0 #text/2 3--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d={0:{input_a:1,input_b:2,input_x:!1,input_y:!0,"#text/0(":_._["__tests__/template.marko_1_renderer"],"#text/0!":_.a={},"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.b={},"#text/2(":_._["__tests__/template.marko_4_renderer"],"#text/2!":_.c={}},1:_.a,2:_.b,3:_.c}),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    Hello
    <!--M_|0 #text/0 1-->
    World
    <!--M_|0 #text/1 2-->
    <div>
      B
      <!--M_|0 #text/2 3-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:{input_a:1,input_b:2,input_x:!1,input_y:!0,"#text/0(":_._["__tests__/template.marko_1_renderer"],"#text/0!":_.a={},"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.b={},"#text/2(":_._["__tests__/template.marko_4_renderer"],"#text/2!":_.c={}},1:_.a,2:_.b,3:_.c}),0]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text0
INSERT html/body/#comment0
INSERT html/body/#text1
INSERT html/body/#comment1
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/script
INSERT html/body/script/#text
```