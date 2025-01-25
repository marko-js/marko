# Write
```html
  <input value=hello type=text><!--M_*0 #input/0--><span>hello<!--M_*0 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={0:_.a={"#input/0=":2,value:"hello"}},_.a["#input/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),0,"__tests__/template.marko_0",0];M._.w()</script>
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
    <!--M_*0 #input/0-->
    <span>
      hello
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#input/0=":2,value:"hello"}},_.a["#input/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),0,"__tests__/template.marko_0",0];M._.w()
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