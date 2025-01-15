# Write
  <input value=hello type=text><!--M_*0 #input/0--><span>hello<!--M_*0 #text/1--></span><!--M_$0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={0:_.a={"#input/0=":2,value:"hello"}},_.a["#input/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),0,"__tests__/template.marko_0",0];M._.w()</script>


# Render "End"
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
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#input/0=":2,value:"hello"}},_.a["#input/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/input0
inserted #document/html0/body1/#comment1
inserted #document/html0/body1/span2
inserted #document/html0/body1/span2/#text0
inserted #document/html0/body1/span2/#comment1
inserted #document/html0/body1/#comment3
inserted #document/html0/body1/script4
inserted #document/html0/body1/script4/#text0
```