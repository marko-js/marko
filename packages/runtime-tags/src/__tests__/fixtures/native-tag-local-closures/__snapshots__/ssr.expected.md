# Write
```html
  <div>0<!--M_*4 #text/0--></div><!--M_*3 #div/0--><!--M_|2 #text/0 3--><button>Add</button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.e={size:1,"#childScope/0":_.a={}},_.a,{"BranchScopes:#div/0":_.c={},"ConditionalRenderer:#div/0":"__tests__/template.marko_3_content",item:_.b={*[Symbol.iterator](){yield this}}},_.c],_.b.content=_._["__tests__/template.marko_3_content"](_.e),_.d),"__tests__/template.marko_2_item 3 __tests__/template.marko_0_size 1"];M._.w()</script>
```

# Render End
```html
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
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT div/#text
INSERT div/#comment
INSERT #comment0
INSERT #comment1
INSERT button
INSERT button/#text
INSERT #comment2
INSERT script
INSERT script/#text
```