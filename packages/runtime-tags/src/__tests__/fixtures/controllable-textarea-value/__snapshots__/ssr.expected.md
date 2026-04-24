# Write
```html
  <textarea>hello</textarea><!--M_*1 #textarea/0--><span>hello<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#textarea/0":2}],_.a["ControlledHandler:#textarea/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<textarea>
  hello
</textarea>
<!--M_*1 #textarea/0-->
<span>
  hello
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#textarea/0": 2
    }], _.a["ControlledHandler:#textarea/0"] = _._[
      "__tests__/template.marko_0/valueChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
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