# Write
  <div a=1 b=2></div><!M*0 #div/0><div a=1 b=2></div><!M*0 #div/1><div a=0 b=2></div><!M*0 #div/2><script>(M$h=[]).push(_=>(_.a={0:{input:{value:{a:1,b:2}},a:0,"#scope":0}}),[])</script>


# Render "End"
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
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/div0
inserted #document/html0/body1/#comment1
inserted #document/html0/body1/div2
inserted #document/html0/body1/#comment3
inserted #document/html0/body1/div4
inserted #document/html0/body1/#comment5
inserted #document/html0/body1/script6
inserted #document/html0/body1/script6/#text0
```