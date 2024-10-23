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
    <!--M_*1 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="b"
    />
    <!--M_*2 #input/0-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*3 #input/0-->
    <span>
      a,b
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={"#childScope/0":_.b={"#input/0:":_.c=["a","b"],"#input/0=":"checkedValues",input:_.d={checkedValues:_.c,value:"a"}},"#childScope/1":_.e={"#input/0:":_.c,"#input/0=":"checkedValues",input:_.f={checkedValues:_.c,value:"b"}},"#childScope/2":_.g={"#input/0:":_.c,"#input/0=":"checkedValues",input:_.h={checkedValues:_.c,value:"c"}}},1:_.b,2:_.e,3:_.g},_.b["#input/0;"]=_.d.checkedValuesChange=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange"](_.a),_.e["#input/0;"]=_.f.checkedValuesChange=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange_0"](_.a),_.g["#input/0;"]=_.h.checkedValuesChange=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange_0"](_.a),_.i),1,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input",2,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input",3,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("input").click()

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
    <!--M_*2 #input/0-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*3 #input/0-->
    <span>
      b
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={"#childScope/0":_.b={"#input/0:":_.c=["a","b"],"#input/0=":"checkedValues",input:_.d={checkedValues:_.c,value:"a"}},"#childScope/1":_.e={"#input/0:":_.c,"#input/0=":"checkedValues",input:_.f={checkedValues:_.c,value:"b"}},"#childScope/2":_.g={"#input/0:":_.c,"#input/0=":"checkedValues",input:_.h={checkedValues:_.c,value:"c"}}},1:_.b,2:_.e,3:_.g},_.b["#input/0;"]=_.d.checkedValuesChange=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange"](_.a),_.e["#input/0;"]=_.f.checkedValuesChange=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange_0"](_.a),_.g["#input/0;"]=_.h.checkedValuesChange=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange_0"](_.a),_.i),1,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input",2,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input",3,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span6/#text0: "a,b" => "b"
#document/html0/body1/input0: attr(type) "checkbox" => "checkbox"
#document/html0/body1/input0: attr(value) "a" => "a"
#document/html0/body1/input2: attr(type) "checkbox" => "checkbox"
#document/html0/body1/input2: attr(value) "b" => "b"
#document/html0/body1/input4: attr(type) "checkbox" => "checkbox"
#document/html0/body1/input4: attr(value) "c" => "c"
```


# Render 
container.querySelector("input").click()

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
    <!--M_*2 #input/0-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*3 #input/0-->
    <span>
      b,a
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={"#childScope/0":_.b={"#input/0:":_.c=["a","b"],"#input/0=":"checkedValues",input:_.d={checkedValues:_.c,value:"a"}},"#childScope/1":_.e={"#input/0:":_.c,"#input/0=":"checkedValues",input:_.f={checkedValues:_.c,value:"b"}},"#childScope/2":_.g={"#input/0:":_.c,"#input/0=":"checkedValues",input:_.h={checkedValues:_.c,value:"c"}}},1:_.b,2:_.e,3:_.g},_.b["#input/0;"]=_.d.checkedValuesChange=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange"](_.a),_.e["#input/0;"]=_.f.checkedValuesChange=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange_0"](_.a),_.g["#input/0;"]=_.h.checkedValuesChange=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange_0"](_.a),_.i),1,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input",2,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input",3,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span6/#text0: "b" => "b,a"
#document/html0/body1/input0: attr(type) "checkbox" => "checkbox"
#document/html0/body1/input0: attr(value) "a" => "a"
#document/html0/body1/input2: attr(type) "checkbox" => "checkbox"
#document/html0/body1/input2: attr(value) "b" => "b"
#document/html0/body1/input4: attr(type) "checkbox" => "checkbox"
#document/html0/body1/input4: attr(value) "c" => "c"
```


# Render 
container.querySelector("input").click()

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
    <!--M_*2 #input/0-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*3 #input/0-->
    <span>
      b
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={"#childScope/0":_.b={"#input/0:":_.c=["a","b"],"#input/0=":"checkedValues",input:_.d={checkedValues:_.c,value:"a"}},"#childScope/1":_.e={"#input/0:":_.c,"#input/0=":"checkedValues",input:_.f={checkedValues:_.c,value:"b"}},"#childScope/2":_.g={"#input/0:":_.c,"#input/0=":"checkedValues",input:_.h={checkedValues:_.c,value:"c"}}},1:_.b,2:_.e,3:_.g},_.b["#input/0;"]=_.d.checkedValuesChange=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange"](_.a),_.e["#input/0;"]=_.f.checkedValuesChange=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange_0"](_.a),_.g["#input/0;"]=_.h.checkedValuesChange=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange_0"](_.a),_.i),1,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input",2,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input",3,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span6/#text0: "b,a" => "b"
#document/html0/body1/input0: attr(type) "checkbox" => "checkbox"
#document/html0/body1/input0: attr(value) "a" => "a"
#document/html0/body1/input2: attr(type) "checkbox" => "checkbox"
#document/html0/body1/input2: attr(value) "b" => "b"
#document/html0/body1/input4: attr(type) "checkbox" => "checkbox"
#document/html0/body1/input4: attr(value) "c" => "c"
```