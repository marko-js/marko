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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#input/0=":1,"#input/0:":_.b=["a","b"],"#input/1=":1,"#input/1:":_.b,"#input/2=":1,"#input/2:":_.b,checkedValue:_.b}},_.a["#input/0;"]=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.a["#input/1;"]=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.a["#input/2;"]=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.c),1,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelectorAll(`input`)[1].click();
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
    <!--M_*1 #input/0-->
    <input
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
      a
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#input/0=":1,"#input/0:":_.b=["a","b"],"#input/1=":1,"#input/1:":_.b,"#input/2=":1,"#input/2:":_.b,checkedValue:_.b}},_.a["#input/0;"]=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.a["#input/1;"]=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.a["#input/2;"]=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.c),1,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "a,b" => "a"
```

# Render
```js
container.querySelectorAll(`input`)[2].click();
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
    <!--M_*1 #input/0-->
    <input
      type="checkbox"
      value="b"
    />
    <!--M_*1 #input/1-->
    <input
      checked=""
      type="checkbox"
      value="c"
    />
    <!--M_*1 #input/2-->
    <span>
      a,c
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#input/0=":1,"#input/0:":_.b=["a","b"],"#input/1=":1,"#input/1:":_.b,"#input/2=":1,"#input/2:":_.b,checkedValue:_.b}},_.a["#input/0;"]=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.a["#input/1;"]=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.a["#input/2;"]=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.c),1,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "a" => "a,c"
```

# Render
```js
container.querySelectorAll(`input`)[0].click();
```
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
      type="checkbox"
      value="b"
    />
    <!--M_*1 #input/1-->
    <input
      checked=""
      type="checkbox"
      value="c"
    />
    <!--M_*1 #input/2-->
    <span>
      c
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#input/0=":1,"#input/0:":_.b=["a","b"],"#input/1=":1,"#input/1:":_.b,"#input/2=":1,"#input/2:":_.b,checkedValue:_.b}},_.a["#input/0;"]=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.a["#input/1;"]=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.a["#input/2;"]=_._["__tests__/template.marko_0/checkedValueChange_0"](_.a),_.c),1,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "a,c" => "c"
```