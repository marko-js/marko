# Render undefined
```html
<html>
  <head />
  <body>
    <!--M_[1-->
    <h1>
      Hello world
    </h1>
    <!--M_]0 #text/0-->
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{},{"f":1}]],"t":["__tests__/tags/components/hello-internal.marko"]});WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{"#text/0!":_.a={m5c:"s0"},"#text/0(":_._.$compat_renderer(_._["__tests__/tags/components/hello-internal.marko"])},1:_.a}),1,"$compat_setScope",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#text1
inserted #document/html0/body1/#text3
removed #comment after #document/html0/body1/#comment0
removed #comment after #document/html0/body1/#text3
```