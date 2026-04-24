# Write
```html
  <button>Toggle</button><!--M_*1 #button/0--><div></div><!--M_*1 #div/1--><!--M_[--><div>1<!--M_*3 #text/0--></div><span>1<!--M_*3 #text/1--></span><p>1<!--M_*3 #text/2--></p><!--M_[2--><div>2<!--M_*5 #text/0--></div><span>2<!--M_*5 #text/1--></span><p>2<!--M_*5 #text/2--></p><!--M_[4--><div>3<!--M_*7 #text/0--></div><span>3<!--M_*7 #text/1--></span><p>3<!--M_*7 #text/2--></p><!--M_]1 #text/2 6--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.e=[0,_.a={items:[1,2,3]},{"#childScope/0":_.b={name:1,"#ClosestBranchId":2}},_.b,{"#childScope/0":_.c={name:2,"#ClosestBranchId":4}},_.c,{"#childScope/0":_.d={name:3,"#ClosestBranchId":6}},_.d],_.a.write=_.b.write=_.c.write=_.d.write=_._["__tests__/template.marko_0/write"](_.a),_.e),"__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_items 1"];M._.w()</script>
```

# Render End
```html
<button>
  Toggle
</button>
<!--M_*1 #button/0-->
<div />
<!--M_*1 #div/1-->
<!--M_[-->
<div>
  1
  <!--M_*3 #text/0-->
</div>
<span>
  1
  <!--M_*3 #text/1-->
</span>
<p>
  1
  <!--M_*3 #text/2-->
</p>
<!--M_[2-->
<div>
  2
  <!--M_*5 #text/0-->
</div>
<span>
  2
  <!--M_*5 #text/1-->
</span>
<p>
  2
  <!--M_*5 #text/2-->
</p>
<!--M_[4-->
<div>
  3
  <!--M_*7 #text/0-->
</div>
<span>
  3
  <!--M_*7 #text/1-->
</span>
<p>
  3
  <!--M_*7 #text/2-->
</p>
<!--M_]1 #text/2 6-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.e = [0, _.a = {
      items: [1, 2, 3]
    },
    {
      "#childScope/0": _.b = {
        name: 1,
        "#ClosestBranchId": 2
      }
    }, _.b,
    {
      "#childScope/0": _.c = {
        name: 2,
        "#ClosestBranchId": 4
      }
    }, _.c,
    {
      "#childScope/0": _.d = {
        name: 3,
        "#ClosestBranchId": 6
      }
    }, _.d], _.a.write = _.b.write = _.c.write = _.d.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), _.e),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button
INSERT button/#text
INSERT #comment0
INSERT div0
INSERT #comment1
INSERT #comment2
INSERT div1
INSERT div1/#text
INSERT div1/#comment
INSERT span0
INSERT span0/#text
INSERT span0/#comment
INSERT p0
INSERT p0/#text
INSERT p0/#comment
INSERT #comment3
INSERT div2
INSERT div2/#text
INSERT div2/#comment
INSERT span1
INSERT span1/#text
INSERT span1/#comment
INSERT p1
INSERT p1/#text
INSERT p1/#comment
INSERT #comment4
INSERT div3
INSERT div3/#text
INSERT div3/#comment
INSERT span2
INSERT span2/#text
INSERT span2/#comment
INSERT p2
INSERT p2/#text
INSERT p2/#comment
INSERT #comment5
INSERT script
INSERT script/#text
```