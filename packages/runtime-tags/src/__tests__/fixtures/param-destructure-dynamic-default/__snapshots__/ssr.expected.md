# Write
```html
  <div id=a class=a>0<!--M_*2 #text/1--> object</div><div id=b class=a>1<!--M_*3 #text/1--> object</div><div id=c class=a>2<!--M_*4 #text/1--> undefined</div><div id=d class=b>0<!--M_*5 #text/1--> object</div><div id=e class=b>1<!--M_*6 #text/1--> object</div><div id=f class=b>2<!--M_*7 #text/1--> undefined</div><button>Increment default</button><!--M_*1 #button/6--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={count:0,"ClosureScopes:count":_.c=new Set},_.d={foo:{bar:0},_:_.a,"ClosureSignalIndex:count":0},_.e={foo:{},_:_.a,"ClosureSignalIndex:count":0},_.f={_:_.a,"ClosureSignalIndex:count":0},_.g={foo:{bar:0},_:_.a,"ClosureSignalIndex:count":1},_.h={foo:{},_:_.a,"ClosureSignalIndex:count":1},_.i={_:_.a,"ClosureSignalIndex:count":1}],(_.c).add(_.d),_.c.add(_.e),_.c.add(_.f),_.c.add(_.g),_.c.add(_.h),_.c.add(_.i),_.b),"__tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      class="a"
      id="a"
    >
      0
      <!--M_*2 #text/1-->
       object
    </div>
    <div
      class="a"
      id="b"
    >
      1
      <!--M_*3 #text/1-->
       object
    </div>
    <div
      class="a"
      id="c"
    >
      2
      <!--M_*4 #text/1-->
       undefined
    </div>
    <div
      class="b"
      id="d"
    >
      0
      <!--M_*5 #text/1-->
       object
    </div>
    <div
      class="b"
      id="e"
    >
      1
      <!--M_*6 #text/1-->
       object
    </div>
    <div
      class="b"
      id="f"
    >
      2
      <!--M_*7 #text/1-->
       undefined
    </div>
    <button>
      Increment default
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
            count: 0,
            "ClosureScopes:count": _.c = new Set
          }, _.d = {
            foo:
            {
              bar: 0
            },
            _: _.a,
            "ClosureSignalIndex:count": 0
          }, _.e = {
            foo:
            {},
            _: _.a,
            "ClosureSignalIndex:count": 0
          }, _.f = {
            _: _.a,
            "ClosureSignalIndex:count": 0
          }, _.g = {
            foo:
            {
              bar: 0
            },
            _: _.a,
            "ClosureSignalIndex:count": 1
          }, _.h = {
            foo:
            {},
            _: _.a,
            "ClosureSignalIndex:count": 1
          }, _.i = {
            _: _.a,
            "ClosureSignalIndex:count": 1
          }], (_.c).add(_.d), _.c.add(_.e), _.c.add(_.f), _.c.add(_.g), _.c
          .add(_.h), _.c.add(_.i), _.b),
        "__tests__/template.marko_0_count 1"
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
INSERT html/body/div0
INSERT html/body/div0/#text0
INSERT html/body/div0/#comment
INSERT html/body/div0/#text1
INSERT html/body/div1
INSERT html/body/div1/#text0
INSERT html/body/div1/#comment
INSERT html/body/div1/#text1
INSERT html/body/div2
INSERT html/body/div2/#text0
INSERT html/body/div2/#comment
INSERT html/body/div2/#text1
INSERT html/body/div3
INSERT html/body/div3/#text0
INSERT html/body/div3/#comment
INSERT html/body/div3/#text1
INSERT html/body/div4
INSERT html/body/div4/#text0
INSERT html/body/div4/#comment
INSERT html/body/div4/#text1
INSERT html/body/div5
INSERT html/body/div5/#text0
INSERT html/body/div5/#comment
INSERT html/body/div5/#text1
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```