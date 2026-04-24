# Write
```html
  <button>Increment</button><!--M_*1 #button/0--><!--M_[--><!--M_|3 #text/0--><!--M_]2 #text/0 3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.b={count:0,a:"abc","#childScope/1":_.a={"ConditionalRenderer:#text/0":"__tests__/template.marko_1_content"}},_.a,{_:_.b}],_.a.input_content=_._["__tests__/template.marko_1_content"](_.b),_.c),"__tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<button>
  Increment
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<!--M_|3 #text/0-->
<!--M_]2 #text/0 3-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      count: 0,
      a: "abc",
      "#childScope/1": _.a = {
        "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
      }
    }, _.a,
    {
      _: _.b
    }], _.a.input_content = _._[
      "__tests__/template.marko_1_content"
      ](_.b), _.c),
    "__tests__/template.marko_0_count 1"
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
INSERT #comment1
INSERT #comment2
INSERT #comment3
INSERT script
INSERT script/#text
```