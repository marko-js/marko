# Write
```html
  a<!--M_!^b-->b<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={"#text/0!":_.b={"#text/0*":"#text/0"}},2:_.b},_.b["#text/0^"]=_._["__tests__/template.marko_2_renderer"](_.a),_.c)]</script>
```

# Write
```html
  cd<!--M_!b-->fgh
```

# Render End
```html
<html>
  <head />
  <body>
    a
    <!--M_!^b-->
    b
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#text/0!":_.b={"#text/0*":"#text/0"}},2:_.b},_.b["#text/0^"]=_._["__tests__/template.marko_2_renderer"](_.a),_.c)]
    </script>
    cd
    <!--M_!b-->
    fgh
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
INSERT html/body/script
INSERT html/body/script/#text
INSERT html/body/#text2
INSERT html/body/#comment1
INSERT html/body/#text3
```