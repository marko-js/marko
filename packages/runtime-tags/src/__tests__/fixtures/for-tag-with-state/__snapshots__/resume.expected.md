# Render
```html
<html>
  <head />
  <body>
    <div>
      0: 1
    </div>
    <div>
      1: 2
    </div>
    <div>
      2: 3
    </div>
    <div>
      0
      <!--M_*5 #text/0-->
      : 
      <!---->
      1
      <!--M_*5 #text/1-->
    </div>
    <div>
      1
      <!--M_*6 #text/0-->
      : 
      <!---->
      2
      <!--M_*6 #text/1-->
    </div>
    <div>
      2
      <!--M_*7 #text/0-->
      : 
      <!---->
      3
      <!--M_*7 #text/1-->
    </div>
    <!--M_|1 #text/1 7 6 5-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0,
      {
        "LoopScopeMap:#text/1": new Map(_.a = [
          [0, _.b = {}],
          [1, _.c = {}],
          [2, _.d = {}]
        ])
      }, 3, _.b, _.c, _.d])]
    </script>
  </body>
</html>
```
