# Render {"value":{"a":1,"b":2}}
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
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{input:{value:{a:1,b:2}},a:0}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input_a",0,"packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```