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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={"#childScope/0":_.b={"#input/0=":1,"#input/0:":_.c=["a","b"],input:_.d={checkedValue:_.c,value:"a"}},"#childScope/1":_.e={"#input/0=":1,"#input/0:":_.c,input:_.f={checkedValue:_.c,value:"b"}},"#childScope/2":_.g={"#input/0=":1,"#input/0:":_.c,input:_.h={checkedValue:_.c,value:"c"}}},1:_.b,2:_.e,3:_.g},_.b["#input/0;"]=_.d.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.e["#input/0;"]=_.f.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.g["#input/0;"]=_.h.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.i),1,"__tests__/tags/checkbox.marko_0_input",2,"__tests__/tags/checkbox.marko_0_input",3,"__tests__/tags/checkbox.marko_0_input",0];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={"#childScope/0":_.b={"#input/0=":1,"#input/0:":_.c=["a","b"],input:_.d={checkedValue:_.c,value:"a"}},"#childScope/1":_.e={"#input/0=":1,"#input/0:":_.c,input:_.f={checkedValue:_.c,value:"b"}},"#childScope/2":_.g={"#input/0=":1,"#input/0:":_.c,input:_.h={checkedValue:_.c,value:"c"}}},1:_.b,2:_.e,3:_.g},_.b["#input/0;"]=_.d.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.e["#input/0;"]=_.f.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.g["#input/0;"]=_.h.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.i),1,"__tests__/tags/checkbox.marko_0_input",2,"__tests__/tags/checkbox.marko_0_input",3,"__tests__/tags/checkbox.marko_0_input",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span6/#text0: "a,b" => "b"
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={"#childScope/0":_.b={"#input/0=":1,"#input/0:":_.c=["a","b"],input:_.d={checkedValue:_.c,value:"a"}},"#childScope/1":_.e={"#input/0=":1,"#input/0:":_.c,input:_.f={checkedValue:_.c,value:"b"}},"#childScope/2":_.g={"#input/0=":1,"#input/0:":_.c,input:_.h={checkedValue:_.c,value:"c"}}},1:_.b,2:_.e,3:_.g},_.b["#input/0;"]=_.d.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.e["#input/0;"]=_.f.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.g["#input/0;"]=_.h.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.i),1,"__tests__/tags/checkbox.marko_0_input",2,"__tests__/tags/checkbox.marko_0_input",3,"__tests__/tags/checkbox.marko_0_input",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span6/#text0: "b" => "b,a"
```


# Render 
container.querySelector("input").click()

```html
<html>
  <head />
  <body>
    <input
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={"#childScope/0":_.b={"#input/0=":1,"#input/0:":_.c=["a","b"],input:_.d={checkedValue:_.c,value:"a"}},"#childScope/1":_.e={"#input/0=":1,"#input/0:":_.c,input:_.f={checkedValue:_.c,value:"b"}},"#childScope/2":_.g={"#input/0=":1,"#input/0:":_.c,input:_.h={checkedValue:_.c,value:"c"}}},1:_.b,2:_.e,3:_.g},_.b["#input/0;"]=_.d.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.e["#input/0;"]=_.f.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.g["#input/0;"]=_.h.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.i),1,"__tests__/tags/checkbox.marko_0_input",2,"__tests__/tags/checkbox.marko_0_input",3,"__tests__/tags/checkbox.marko_0_input",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span6/#text0: "b,a" => "b"
```