# Write
```html
  <button>Inc</button><!--M_*1 #button/0--><div><!--M_[--><div><!--M_[--><div>1<!--M_*5 #text/0-->.<!>2<!--M_*5 #text/1--></div><!--M_]4 #text/0 5--></div><!--M_]2 #text/0 3--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.f=[0,_.a={x:1,"ClosureScopes:y":_.h=new Set,"#childScope/1":_.e={"ConditionalScope:#text/0":_.b={"ClosureScopes:outer":_.g=new Set,"#childScope/0":_.d={"ConditionalScope:#text/0":_.c={"ClosureSignalIndex:outer":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_2_content"},"ClosureSignalIndex:y":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_content"}},_.e,_.b,_.d,_.c],_.b._=_.a,_.c._=_.b,_.d.content=_._["__tests__/template.marko_2_content"](_.b),_.e.content=_._["__tests__/template.marko_1_content"](_.a),(_.g).add(_.c),(_.h).add(_.b),_.f),"__tests__/template.marko_0_x",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      Inc
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[-->
      <div>
        <!--M_[-->
        <div>
          1
          <!--M_*5 #text/0-->
          .
          <!---->
          2
          <!--M_*5 #text/1-->
        </div>
        <!--M_]4 #text/0 5-->
      </div>
      <!--M_]2 #text/0 3-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.f = [0, _.a = {
          x: 1,
          "ClosureScopes:y": _.h = new Set,
          "#childScope/1": _.e = {
            "ConditionalScope:#text/0": _.b = {
              "ClosureScopes:outer": _.g = new Set,
              "#childScope/0": _.d = {
                "ConditionalScope:#text/0": _.c = {
                  "ClosureSignalIndex:outer": 0
                },
                "ConditionalRenderer:#text/0": "__tests__/template.marko_2_content"
              },
              "ClosureSignalIndex:y": 0
            },
            "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
          }
        }, _.e, _.b, _.d, _.c], _.b._ = _.a, _.c._ = _.b, _.d.content = _._[
          "__tests__/template.marko_2_content"
          ](_.b), _.e.content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), (_.g).add(_.c), (_.h).add(_.b), _.f),
        "__tests__/template.marko_0_x",
        1
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
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment
INSERT html/body/div
INSERT html/body/div/#comment0
INSERT html/body/div/div
INSERT html/body/div/div/#comment0
INSERT html/body/div/div/div
INSERT html/body/div/div/div/#text0
INSERT html/body/div/div/div/#comment0
INSERT html/body/div/div/div/#text1
INSERT html/body/div/div/div/#comment1
INSERT html/body/div/div/div/#text2
INSERT html/body/div/div/div/#comment2
INSERT html/body/div/div/#comment1
INSERT html/body/div/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```