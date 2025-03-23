# Write
```html
  <span>child</span><div>4<!--M_*1 #text/2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={"#scopeOffset/1":3,"#childScope/0":_.b={}},2:_.b},_.b["#TagVariable"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c)]</script>
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
      4
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#scopeOffset/1":3,"#childScope/0":_.b={}},2:_.b},_.b["#TagVariable"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c)]
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