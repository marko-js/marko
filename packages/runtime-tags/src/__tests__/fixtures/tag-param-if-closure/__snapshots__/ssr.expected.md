# Write
```html
  <button>Increment</button><!--M_*1 #button/0--><!--M_[--><!--M_|3 #text/0--><!--M_]2 #text/0 3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.b={count:0,a:"abc","#childScope/1":_.a={"ConditionalRenderer:#text/0":"__tests__/template.marko_1_content"}},_.a,{_:_.b}],_.a.input_content=_._["__tests__/template.marko_1_content"](_.b),_.c),"__tests__/template.marko_0_count",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
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
        "__tests__/template.marko_0_count",
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
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/body/script
INSERT html/body/script/#text
```