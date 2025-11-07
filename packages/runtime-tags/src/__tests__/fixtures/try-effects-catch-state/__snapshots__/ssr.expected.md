# Write
```html
  <div></div><!--M_*1 #div/0--><!--M_[--><button>inc</button><!--M_*2 #button/0--> -- <!>&zwj;<!--M_*2 #text/1--><!--M_]1 #text/1 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={clickCount:0,"ClosureScopes:clickCount":_.d=new Set},_.b={_:_.a,"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/1"}],_.b["#CatchContent"]=_._["__tests__/template.marko_2_content"](_.a),(_.d).add(_.b),_.c),"__tests__/template.marko_1_clickCount",2];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*1 #div/0-->
    <!--M_[-->
    <button>
      inc
    </button>
    <!--M_*2 #button/0-->
     -- 
    <!---->
    ‍
    <!--M_*2 #text/1-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:clickCount": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#CatchContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_1_clickCount",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment2
INSERT html/body/#text0
INSERT html/body/#comment3
INSERT html/body/#text1
INSERT html/body/#comment4
INSERT html/body/#comment5
INSERT html/body/script
INSERT html/body/script/#text
```