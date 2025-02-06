# Write
```html
  <input value=a checked type=checkbox><!--M_*1 #input/0--><input value=b checked type=checkbox><!--M_*1 #input/1--><input value=c type=checkbox><!--M_*1 #input/2--><span>a,b<!--M_*1 #text/3--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={"#input/0=":1,"#input/0:":_.b=["a","b"],"#input/1=":1,"#input/1:":_.b,"#input/2=":1,"#input/2:":_.b,checkedValue:_.b}},_.a["#input/0;"]=_.a["#input/1;"]=_.a["#input/2;"]=_.a._checkedValueChange=_._["__tests__/template.marko_0/_checkedValueChange"](_.a),_.c),1,"__tests__/template.marko_0",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="checkbox"
      value="a"
    />
    <!--M_*1 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="b"
    />
    <!--M_*1 #input/1-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*1 #input/2-->
    <span>
      a,b
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#input/0=":1,"#input/0:":_.b=["a","b"],"#input/1=":1,"#input/1:":_.b,"#input/2=":1,"#input/2:":_.b,checkedValue:_.b}},_.a["#input/0;"]=_.a["#input/1;"]=_.a["#input/2;"]=_.a._checkedValueChange=_._["__tests__/template.marko_0/_checkedValueChange"](_.a),_.c),1,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/input0
INSERT html/body/#comment0
INSERT html/body/input1
INSERT html/body/#comment1
INSERT html/body/input2
INSERT html/body/#comment2
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/script
INSERT html/body/script/#text
```