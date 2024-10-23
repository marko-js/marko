# Render {}
```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="checkbox"
      value="a"
    />
    <!--M_*0 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="b"
    />
    <!--M_*0 #input/1-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*0 #input/2-->
    <span>
      a,b
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={"#input/0:":_.b=["a","b"],"#input/1:":_.b,"#input/2:":_.b,checkedValues:_.b}},_.a["#input/0;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange"](_.a),_.a["#input/1;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange_0"](_.a),_.a["#input/2;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange_0"](_.a),_.c),0,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelectorAll(`input`)[1].click()

```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="checkbox"
      value="a"
    />
    <!--M_*0 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="b"
    />
    <!--M_*0 #input/1-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*0 #input/2-->
    <span>
      a
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={"#input/0:":_.b=["a","b"],"#input/1:":_.b,"#input/2:":_.b,checkedValues:_.b}},_.a["#input/0;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange"](_.a),_.a["#input/1;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange_0"](_.a),_.a["#input/2;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange_0"](_.a),_.c),0,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span6/#text0: "a,b" => "a"
```


# Render 
container.querySelectorAll(`input`)[2].click()

```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="checkbox"
      value="a"
    />
    <!--M_*0 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="b"
    />
    <!--M_*0 #input/1-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*0 #input/2-->
    <span>
      a,c
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={"#input/0:":_.b=["a","b"],"#input/1:":_.b,"#input/2:":_.b,checkedValues:_.b}},_.a["#input/0;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange"](_.a),_.a["#input/1;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange_0"](_.a),_.a["#input/2;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange_0"](_.a),_.c),0,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span6/#text0: "a" => "a,c"
```


# Render 
container.querySelectorAll(`input`)[0].click()

```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="checkbox"
      value="a"
    />
    <!--M_*0 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="b"
    />
    <!--M_*0 #input/1-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*0 #input/2-->
    <span>
      c
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={"#input/0:":_.b=["a","b"],"#input/1:":_.b,"#input/2:":_.b,checkedValues:_.b}},_.a["#input/0;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange"](_.a),_.a["#input/1;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange_0"](_.a),_.a["#input/2;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange_0"](_.a),_.c),0,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span6/#text0: "a,c" => "c"
```