# Write
```html
  <input value=hello type=text><!--M_*2 #input/0--><span>hello<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.d={"#childScope/0":_.a={"ControlledType:#input/0":2,input:_.b={type:"text",value:"hello"}}},_.a],_.a["ControlledHandler:#input/0"]=_.b.valueChange=_._["__tests__/template.marko_0/valueChange"](_.d),_.c),"__tests__/tags/my-input.marko_0_input 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <input
      type="text"
      value="hello"
    />
    <!--M_*2 #input/0-->
    <span>
      hello
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          "#childScope/0": _.a = {
            "ControlledType:#input/0": 2,
            input: _.b = {
              type: "text",
              value: "hello"
            }
          }
        }, _.a], _.a["ControlledHandler:#input/0"] = _.b.valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.d), _.c),
        "__tests__/tags/my-input.marko_0_input 2"
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
INSERT html/body/input
INSERT html/body/#comment
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/script
INSERT html/body/script/#text
```