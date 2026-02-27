# Write
```html
  <div>0<!--M_*4 #text/0--></div><!--M_*3 #div/0--><!--M_|2 #text/0 3--><button>Add</button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.e={size:1,"#childScope/0":_.a={}},_.a,{"BranchScopes:#div/0":_.c={},"ConditionalRenderer:#div/0":"__tests__/template.marko_3_content",item:_.b={*[Symbol.iterator](){yield this}}},_.c],_.b.content=_._["__tests__/template.marko_3_content"](_.e),_.d),"__tests__/template.marko_2_item 3 __tests__/template.marko_0_size 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      0
      <!--M_*4 #text/0-->
    </div>
    <!--M_*3 #div/0-->
    <!--M_|2 #text/0 3-->
    <button>
      Add
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.e = {
          size: 1,
          "#childScope/0": _.a = {}
        }, _.a,
        {
          "BranchScopes:#div/0": _.c = {},
          "ConditionalRenderer:#div/0": "__tests__/template.marko_3_content",
          item: _.b = {
            *[Symbol.iterator]()
            {
              yield this
            }
          }
        }, _.c], _.b.content = _._[
          "__tests__/template.marko_3_content"
          ](_.e), _.d),
        "__tests__/template.marko_2_item 3 __tests__/template.marko_0_size 1"
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
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```