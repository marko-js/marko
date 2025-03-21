# Render `{"children":{"1":"a","2":"b","3":"c"}}`

```html
<html>
  <head />
  <body>
    <div>
      <p>
        1
        <!--M_*2 #text/0-->
        : 
        <!---->
        a
        <!--M_*2 #text/1-->
      </p>
      <p>
        2
        <!--M_*3 #text/0-->
        : 
        <!---->
        b
        <!--M_*3 #text/1-->
      </p>
      <p>
        3
        <!--M_*4 #text/0-->
        : 
        <!---->
        c
        <!--M_*4 #text/1-->
      </p>
      <!--M_|1 #text/0 4 3 2-->
      <p>
        1
        <!--M_*5 #text/0-->
      </p>
      <p>
        2
        <!--M_*6 #text/0-->
      </p>
      <p>
        3
        <!--M_*7 #text/0-->
      </p>
      <!--M_|1 #text/1 7 6 5-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:{"LoopScopeMap:#text/0":new Map(_.a=[["1",_.c={}],["2",_.d={}],["3",_.e={}]]),"LoopScopeMap:#text/1":new Map(_.b=[["1",_.f={}],["2",_.g={}],["3",_.h={}]])},2:_.c,3:_.d,4:_.e,5:_.f,6:_.g,7:_.h})]
    </script>
  </body>
</html>
```
