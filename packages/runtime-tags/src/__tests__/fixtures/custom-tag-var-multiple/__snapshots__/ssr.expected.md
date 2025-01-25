# Write
```html
  <span>child</span><div>3<!--M_*0 #text/1--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={0:_.a={"#childScope/0":_.b={x:1,y:2}},1:_.b},_.b["/"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <span>
      child
    </span>
    <div>
      3
      <!--M_*0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={"#childScope/0":_.b={x:1,y:2}},1:_.b},_.b["/"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c),0]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/script
INSERT html/body/script/#text
```