# Write
```html
  <div></div><!--M_*2 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.b={text:_._["__tests__/template.marko_0/text"]},_.a={_:_.b}],_.a.run=_._["__tests__/template.marko_1/run"](_.a),_.c),"__tests__/template.marko_1_run",2];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*2 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.b = {
          text: _._[
            "__tests__/template.marko_0/text"
            ]
        }, _.a = {
          _: _.b
        }], _.a.run = _._[
          "__tests__/template.marko_1/run"
          ](_.a), _.c),
        "__tests__/template.marko_1_run",
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
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```