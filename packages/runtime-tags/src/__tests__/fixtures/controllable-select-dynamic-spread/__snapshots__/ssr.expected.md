# Write
```html
  <select><option value=a>A</option><!--M_*3 #option/0--><option value=b selected>B</option><!--M_*3 #option/1--><option value=c>C</option><!--M_*3 #option/2--></select><!--M_|1 #text/0 2--><span>b<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={"#text/0=":3,"#text/0:":"b",tag:"select","#text/0!":_.b={},"#text/0(":"select"},2:_.b},_.a["#text/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.c),3,"__tests__/template.marko_1",0];M._.w()</script>
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#text/0=":3,"#text/0:":"b",tag:"select","#text/0!":_.b={},"#text/0(":"select"},2:_.b},_.a["#text/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.c),3,"__tests__/template.marko_1",0];M._.w()
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