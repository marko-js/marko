# Render undefined
```html
<html>
  <head />
  <body>
    <div>
      0
      <!--M_*1 #text/0-->
      : 
      <!---->
      1
      <!--M_*1 #text/1-->
    </div>
    <div>
      1
      <!--M_*2 #text/0-->
      : 
      <!---->
      2
      <!--M_*2 #text/1-->
    </div>
    <div>
      2
      <!--M_*3 #text/0-->
      : 
      <!---->
      3
      <!--M_*3 #text/1-->
    </div>
    <div>
      0
      <!--M_*4 #text/0-->
      : 
      <!---->
      1
      <!--M_*4 #text/1-->
    </div>
    <div>
      1
      <!--M_*5 #text/0-->
      : 
      <!---->
      2
      <!--M_*5 #text/1-->
    </div>
    <div>
      2
      <!--M_*6 #text/0-->
      : 
      <!---->
      3
      <!--M_*6 #text/1-->
    </div>
    <!--M_|0 #text/1 4,5,6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.e={0:{"#text/1(":new Map(_.a=[[0,_.b={}],[1,_.c={}],[2,_.d={}]])},4:_.b,5:_.c,6:_.d})];M._.d=1
    </script>
  </body>
</html>
```

# Mutations
```

```