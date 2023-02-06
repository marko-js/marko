# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html
<html>
  <head />
  <body>
    <div>
      a
      <!--M#1 #text/0-->
      b
      <!--M#2 #text/0-->
      c
      <!--M#3 #text/0-->
      <!--M|0 #div/0 1,2,3-->
    </div>
    <!--M#0 #div/0-->
    <script>
      (M$h=[]).push((b,s)=&gt;({1:{},2:{},3:{}}),[])
    </script>
  </body>
</html>
```

# Mutations
```

```