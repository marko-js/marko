# Write
```html
  <h1 class="a b">Hello World</h1><!--M_|1 #text/0 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"h1"},_.a])]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <h1
      class="a b"
    >
      Hello World
    </h1>
    <!--M_|1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"h1"},_.a])]
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
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```