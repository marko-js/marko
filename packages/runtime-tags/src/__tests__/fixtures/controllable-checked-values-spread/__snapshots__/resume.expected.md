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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:_.a={"#childScope/0":_.b={"#input/0=":1,"#input/0:":_.c=["a","b"],input:_.d={checkedValue:_.c,value:"a"}},"#childScope/1":_.e={"#input/0=":1,"#input/0:":_.c,input:_.f={checkedValue:_.c,value:"b"}},"#childScope/2":_.g={"#input/0=":1,"#input/0:":_.c,input:_.h={checkedValue:_.c,value:"c"}}},2:_.b,3:_.e,4:_.g},_.b["#input/0;"]=_.d.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.e["#input/0;"]=_.f.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.g["#input/0;"]=_.h.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.i),2,"__tests__/tags/checkbox.marko_0_input",3,"__tests__/tags/checkbox.marko_0_input",4,"__tests__/tags/checkbox.marko_0_input",0];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:_.a={"#childScope/0":_.b={"#input/0=":1,"#input/0:":_.c=["a","b"],input:_.d={checkedValue:_.c,value:"a"}},"#childScope/1":_.e={"#input/0=":1,"#input/0:":_.c,input:_.f={checkedValue:_.c,value:"b"}},"#childScope/2":_.g={"#input/0=":1,"#input/0:":_.c,input:_.h={checkedValue:_.c,value:"c"}}},2:_.b,3:_.e,4:_.g},_.b["#input/0;"]=_.d.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.e["#input/0;"]=_.f.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.g["#input/0;"]=_.h.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.i),2,"__tests__/tags/checkbox.marko_0_input",3,"__tests__/tags/checkbox.marko_0_input",4,"__tests__/tags/checkbox.marko_0_input",0];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:_.a={"#childScope/0":_.b={"#input/0=":1,"#input/0:":_.c=["a","b"],input:_.d={checkedValue:_.c,value:"a"}},"#childScope/1":_.e={"#input/0=":1,"#input/0:":_.c,input:_.f={checkedValue:_.c,value:"b"}},"#childScope/2":_.g={"#input/0=":1,"#input/0:":_.c,input:_.h={checkedValue:_.c,value:"c"}}},2:_.b,3:_.e,4:_.g},_.b["#input/0;"]=_.d.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.e["#input/0;"]=_.f.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.g["#input/0;"]=_.h.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.i),2,"__tests__/tags/checkbox.marko_0_input",3,"__tests__/tags/checkbox.marko_0_input",4,"__tests__/tags/checkbox.marko_0_input",0];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:_.a={"#childScope/0":_.b={"#input/0=":1,"#input/0:":_.c=["a","b"],input:_.d={checkedValue:_.c,value:"a"}},"#childScope/1":_.e={"#input/0=":1,"#input/0:":_.c,input:_.f={checkedValue:_.c,value:"b"}},"#childScope/2":_.g={"#input/0=":1,"#input/0:":_.c,input:_.h={checkedValue:_.c,value:"c"}}},2:_.b,3:_.e,4:_.g},_.b["#input/0;"]=_.d.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.e["#input/0;"]=_.f.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.g["#input/0;"]=_.h.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.i),2,"__tests__/tags/checkbox.marko_0_input",3,"__tests__/tags/checkbox.marko_0_input",4,"__tests__/tags/checkbox.marko_0_input",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "b,a" => "b"
```