# Render
```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="radio"
      value="a"
    />
    <!--M_*1 #input/0-->
    <input
      type="radio"
      value="b"
    />
    <!--M_*1 #input/1-->
    <input
      type="radio"
      value="c"
    />
    <!--M_*1 #input/2-->
    <span>
      a
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={"ControlledType:#input/0":1,"ControlledValue:#input/0":"a","ControlledType:#input/1":1,"ControlledValue:#input/1":"a","ControlledType:#input/2":1,"ControlledValue:#input/2":"a",checkedValue:"a"}],_.a["ControlledHandler:#input/0"]=_.a["ControlledHandler:#input/1"]=_.a["ControlledHandler:#input/2"]=_.a._checkedValueChange=_._["__tests__/template.marko_0/_checkedValueChange"](_.a),_.b),1,"__tests__/template.marko_0"];M._.w()
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
      type="radio"
      value="a"
    />
    <!--M_*1 #input/0-->
    <input
      checked=""
      type="radio"
      value="b"
    />
    <!--M_*1 #input/1-->
    <input
      type="radio"
      value="c"
    />
    <!--M_*1 #input/2-->
    <span>
      b
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={"ControlledType:#input/0":1,"ControlledValue:#input/0":"a","ControlledType:#input/1":1,"ControlledValue:#input/1":"a","ControlledType:#input/2":1,"ControlledValue:#input/2":"a",checkedValue:"a"}],_.a["ControlledHandler:#input/0"]=_.a["ControlledHandler:#input/1"]=_.a["ControlledHandler:#input/2"]=_.a._checkedValueChange=_._["__tests__/template.marko_0/_checkedValueChange"](_.a),_.b),1,"__tests__/template.marko_0"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "a" => "b"
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
      type="radio"
      value="a"
    />
    <!--M_*1 #input/0-->
    <input
      type="radio"
      value="b"
    />
    <!--M_*1 #input/1-->
    <input
      checked=""
      type="radio"
      value="c"
    />
    <!--M_*1 #input/2-->
    <span>
      c
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={"ControlledType:#input/0":1,"ControlledValue:#input/0":"a","ControlledType:#input/1":1,"ControlledValue:#input/1":"a","ControlledType:#input/2":1,"ControlledValue:#input/2":"a",checkedValue:"a"}],_.a["ControlledHandler:#input/0"]=_.a["ControlledHandler:#input/1"]=_.a["ControlledHandler:#input/2"]=_.a._checkedValueChange=_._["__tests__/template.marko_0/_checkedValueChange"](_.a),_.b),1,"__tests__/template.marko_0"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "b" => "c"
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
      checked=""
      type="radio"
      value="a"
    />
    <!--M_*1 #input/0-->
    <input
      type="radio"
      value="b"
    />
    <!--M_*1 #input/1-->
    <input
      type="radio"
      value="c"
    />
    <!--M_*1 #input/2-->
    <span>
      a
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={"ControlledType:#input/0":1,"ControlledValue:#input/0":"a","ControlledType:#input/1":1,"ControlledValue:#input/1":"a","ControlledType:#input/2":1,"ControlledValue:#input/2":"a",checkedValue:"a"}],_.a["ControlledHandler:#input/0"]=_.a["ControlledHandler:#input/1"]=_.a["ControlledHandler:#input/2"]=_.a._checkedValueChange=_._["__tests__/template.marko_0/_checkedValueChange"](_.a),_.b),1,"__tests__/template.marko_0"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "c" => "a"
```