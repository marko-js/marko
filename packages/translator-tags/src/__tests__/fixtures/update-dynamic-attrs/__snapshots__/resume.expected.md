# Render {"value":{"a":1,"b":2}}
```html
<html>
  <head />
  <body>
    <div
      a="1"
      b="2"
    />
    <!--M*0 #div/0-->
    <div
      a="1"
      b="2"
    />
    <!--M*0 #div/1-->
    <div
      a="0"
      b="2"
    />
    <!--M*0 #div/2-->
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{input:{value:{a:1,b:2}},a:0,"#scope":0}}),[])
    </script>
  </body>
</html>
```

# Mutations
```

```