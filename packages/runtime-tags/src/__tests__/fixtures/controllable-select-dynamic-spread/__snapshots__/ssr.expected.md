# Write
```html
  <select><option value=a>A</option><!--M_*3 #option/0--><option value=b selected>B</option><!--M_*3 #option/1--><option value=c>C</option><!--M_*3 #option/2--></select><!--M_|1 #text/0 2--><span>b<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ControlledType:#text/0":3,"ControlledValue:#text/0":"b","ConditionalScope:#text/0":_.b={},"ConditionalRenderer:#text/0":"select",tag:"select"},_.b,{}],_.a["ControlledHandler:#text/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.c),"__tests__/template.marko_1",3];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <select>
      <option
        value="a"
      >
        A
      </option>
      <!--M_*3 #option/0-->
      <option
        selected=""
        value="b"
      >
        B
      </option>
      <!--M_*3 #option/1-->
      <option
        value="c"
      >
        C
      </option>
      <!--M_*3 #option/2-->
    </select>
    <!--M_|1 #text/0 2-->
    <span>
      b
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ControlledType:#text/0":3,"ControlledValue:#text/0":"b","ConditionalScope:#text/0":_.b={},"ConditionalRenderer:#text/0":"select",tag:"select"},_.b,{}],_.a["ControlledHandler:#text/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.c),"__tests__/template.marko_1",3];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/select
INSERT html/body/select/option0
INSERT html/body/select/option0/#text
INSERT html/body/select/#comment0
INSERT html/body/select/option1
INSERT html/body/select/option1/#text
INSERT html/body/select/#comment1
INSERT html/body/select/option2
INSERT html/body/select/option2/#text
INSERT html/body/select/#comment2
INSERT html/body/#comment
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/script
INSERT html/body/script/#text
```