# Write
```html
  <body><h1>Hello World</h1><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={name:"World"},1,_.d={_:_.a}],(_.c=new Set).add(_.d),_.b)];M._.w()</script></body>
```

# Render End
```html
<html>
  <head />
  <body>
    <h1>
      Hello World
    </h1>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={name:"World"},1,_.d={_:_.a}],(_.c=new Set).add(_.d),_.b)];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/h1
INSERT html/body/h1/#text
INSERT html/body/script
INSERT html/body/script/#text
```