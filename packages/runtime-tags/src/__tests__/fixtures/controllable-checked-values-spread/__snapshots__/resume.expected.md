# Render
```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="checkbox"
      value="a"
    />
    <!--M_*2 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="b"
    />
    <!--M_*3 #input/0-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*4 #input/0-->
    <span>
      a,b
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.a={"#childScope/0":_.b={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.c=["a","b"],input:_.d={checkedValue:_.c,value:"a"}},"#childScope/1":_.e={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.c,input:_.f={checkedValue:_.c,value:"b"}},"#childScope/2":_.g={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.c,input:_.h={checkedValue:_.c,value:"c"}}},_.b,_.e,_.g],_.a._checkedValueChange=_.b["ControlledHandler:#input/0"]=_.d.checkedValueChange=_.e["ControlledHandler:#input/0"]=_.f.checkedValueChange=_.g["ControlledHandler:#input/0"]=_.h.checkedValueChange=_._["__tests__/template.marko_0/_checkedValueChange"](_.a),_.i),2,"__tests__/tags/checkbox.marko_0_input",3,"__tests__/tags/checkbox.marko_0_input",4,"__tests__/tags/checkbox.marko_0_input"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("input").click();
```
```html
<html>
  <head />
  <body>
    <input
      type="checkbox"
      value="a"
    />
    <!--M_*2 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="b"
    />
    <!--M_*3 #input/0-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*4 #input/0-->
    <span>
      b
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.a={"#childScope/0":_.b={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.c=["a","b"],input:_.d={checkedValue:_.c,value:"a"}},"#childScope/1":_.e={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.c,input:_.f={checkedValue:_.c,value:"b"}},"#childScope/2":_.g={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.c,input:_.h={checkedValue:_.c,value:"c"}}},_.b,_.e,_.g],_.a._checkedValueChange=_.b["ControlledHandler:#input/0"]=_.d.checkedValueChange=_.e["ControlledHandler:#input/0"]=_.f.checkedValueChange=_.g["ControlledHandler:#input/0"]=_.h.checkedValueChange=_._["__tests__/template.marko_0/_checkedValueChange"](_.a),_.i),2,"__tests__/tags/checkbox.marko_0_input",3,"__tests__/tags/checkbox.marko_0_input",4,"__tests__/tags/checkbox.marko_0_input"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "a,b" => "b"
```

# Render
```js
container.querySelector("input").click();
```
```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="checkbox"
      value="a"
    />
    <!--M_*2 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="b"
    />
    <!--M_*3 #input/0-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*4 #input/0-->
    <span>
      b,a
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.a={"#childScope/0":_.b={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.c=["a","b"],input:_.d={checkedValue:_.c,value:"a"}},"#childScope/1":_.e={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.c,input:_.f={checkedValue:_.c,value:"b"}},"#childScope/2":_.g={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.c,input:_.h={checkedValue:_.c,value:"c"}}},_.b,_.e,_.g],_.a._checkedValueChange=_.b["ControlledHandler:#input/0"]=_.d.checkedValueChange=_.e["ControlledHandler:#input/0"]=_.f.checkedValueChange=_.g["ControlledHandler:#input/0"]=_.h.checkedValueChange=_._["__tests__/template.marko_0/_checkedValueChange"](_.a),_.i),2,"__tests__/tags/checkbox.marko_0_input",3,"__tests__/tags/checkbox.marko_0_input",4,"__tests__/tags/checkbox.marko_0_input"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "b" => "b,a"
```

# Render
```js
container.querySelector("input").click();
```
```html
<html>
  <head />
  <body>
    <input
      type="checkbox"
      value="a"
    />
    <!--M_*2 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="b"
    />
    <!--M_*3 #input/0-->
    <input
      type="checkbox"
      value="c"
    />
    <!--M_*4 #input/0-->
    <span>
      b
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.a={"#childScope/0":_.b={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.c=["a","b"],input:_.d={checkedValue:_.c,value:"a"}},"#childScope/1":_.e={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.c,input:_.f={checkedValue:_.c,value:"b"}},"#childScope/2":_.g={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.c,input:_.h={checkedValue:_.c,value:"c"}}},_.b,_.e,_.g],_.a._checkedValueChange=_.b["ControlledHandler:#input/0"]=_.d.checkedValueChange=_.e["ControlledHandler:#input/0"]=_.f.checkedValueChange=_.g["ControlledHandler:#input/0"]=_.h.checkedValueChange=_._["__tests__/template.marko_0/_checkedValueChange"](_.a),_.i),2,"__tests__/tags/checkbox.marko_0_input",3,"__tests__/tags/checkbox.marko_0_input",4,"__tests__/tags/checkbox.marko_0_input"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "b,a" => "b"
```