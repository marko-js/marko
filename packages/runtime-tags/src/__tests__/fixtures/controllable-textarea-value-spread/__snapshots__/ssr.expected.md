# Write
```html
  <textarea>hello</textarea><!--M_*2 #textarea/0--><span>hello<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.d={"#childScope/0":_.a={"ControlledType:#textarea/0":2,input:_.b={value:"hello"}}},_.a],_.a["ControlledHandler:#textarea/0"]=_.b.valueChange=_._["__tests__/template.marko_0/valueChange"](_.d),_.c),"__tests__/tags/my-textarea.marko_0_input 2"];M._.w()</script>
```

# Render End
```html
<textarea>
  hello
</textarea>
<!--M_*2 #textarea/0-->
<span>
  hello
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.d = {
      "#childScope/0": _.a = {
        "ControlledType:#textarea/0": 2,
        input: _.b = {
          value: "hello"
        }
      }
    }, _.a], _.a["ControlledHandler:#textarea/0"] = _.b.valueChange = _._[
      "__tests__/template.marko_0/valueChange"
      ](_.d), _.c),
    "__tests__/tags/my-textarea.marko_0_input 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT textarea
INSERT textarea/#text
INSERT #comment
INSERT span
INSERT span/#text
INSERT span/#comment
INSERT script
INSERT script/#text
```