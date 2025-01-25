# Write
```html
  <!--M_[2-->Foo!<!--M_]1 #text/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d={0:_.a={"#childScope/0":_.b={"#text/0!":_.c={}}},1:_.b,2:_.c},_.b["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),0]</script>
```

# Render End
```html
<!--M_[2-->
<html>
  <head />
  <body>
    Foo!
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={"#text/0!":_.c={}}},1:_.b,2:_.c},_.b["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),0]
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
INSERT html/body/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```