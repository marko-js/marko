# Write
```html
  <div><span>Hello<!--M_*2 #text/0--></span><!--M_}1 #div/0 2--></div><input value=Hello><!--M_*1 #input/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#input/1":2,value:"Hello"},{_:_.a}],_.a["ControlledHandler:#input/1"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),"__tests__/template.marko_0",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <span>
        Hello
        <!--M_*2 #text/0-->
      </span>
      <!--M_}1 #div/0 2-->
    </div>
    <input
      value="Hello"
    />
    <!--M_*1 #input/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#input/1": 2,
          value: "Hello"
        },
        {
          _: _.a
        }], _.a["ControlledHandler:#input/1"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0",
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
INSERT html/body/div
INSERT html/body/div/span
INSERT html/body/div/span/#text
INSERT html/body/div/span/#comment
INSERT html/body/div/#comment
INSERT html/body/input
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```