# Render undefined
```html
<html>
  <head />
  <body>
    <div>
      <div>
        1
        <!--M#1 #text/0-->
      </div>
      <div>
        2
        <!--M#2 #text/0-->
      </div>
      <div>
        3
        <!--M#3 #text/0-->
      </div>
      <!--M|0 #div/0 1,2,3-->
    </div>
    <!--M#0 #div/0-->
    <div>
      <div>
        1
        <!--M#4 #text/0-->
      </div>
      <div>
        2
        <!--M#5 #text/0-->
      </div>
      <div>
        3
        <!--M#6 #text/0-->
      </div>
      <!--M|0 #text/1 4,5,6-->
      <div />
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({1:{},2:{},3:{},4:{},5:{},6:{}}),[])
    </script>
  </body>
</html>
```

# Mutations
```

```