# Write
```html
  <select><option value=a>A</option><option value=b selected>B</option><option value=c>C</option></select><!--M_*1 #select/0--><span>b<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={1:_.a={"#select/0=":3,"#select/0:":"b","value/2":"b"}},_.a["#select/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),1,"__tests__/template.marko_0",0];M._.w()</script>
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
      <option
        selected=""
        value="b"
      >
        B
      </option>
      <option
        value="c"
      >
        C
      </option>
    </select>
    <!--M_*1 #select/0-->
    <span>
      b
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={"#select/0=":3,"#select/0:":"b","value/2":"b"}},_.a["#select/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),1,"__tests__/template.marko_0",0];M._.w()
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
INSERT html/body/select/option1
INSERT html/body/select/option1/#text
INSERT html/body/select/option2
INSERT html/body/select/option2/#text
INSERT html/body/#comment
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/script
INSERT html/body/script/#text
```