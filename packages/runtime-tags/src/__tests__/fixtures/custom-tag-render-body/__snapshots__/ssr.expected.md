# Write
```html
  <!>World<!--M_*2 #text/0--><!--M_[3-->This is the body content<!--M_]2 #text/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d={1:_.a={"#childScope/0":_.b={"#text/1!":_.c={}}},2:_.b,3:_.c},_.b["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),0]</script>
```

# Render End
```html
<!---->
<html>
  <head />
  <body>
    World
    <!--M_*2 #text/0-->
    <!--M_[3-->
    This is the body content
    <!--M_]2 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={"#childScope/0":_.b={"#text/1!":_.c={}}},2:_.b,3:_.c},_.b["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),0]
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
INSERT html/body/#text0
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#text1
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```