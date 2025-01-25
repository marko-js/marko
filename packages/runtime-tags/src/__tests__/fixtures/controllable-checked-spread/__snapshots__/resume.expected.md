# Render
```html
<html>
  <head />
  <body>
    <input
      type="checkbox"
    />
    <!--M_*1 #input/0-->
    <span>
      false
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={"#input/0=":0,input:_.c={checked:!1}}},1:_.b},_.b["#input/0;"]=_.c.checkedChange=_._["__tests__/template.marko_0/checkedChange"](_.a),_.d),1,"__tests__/tags/checkbox.marko_0_input",0];M._.w()
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
      checked=""
      type="checkbox"
    />
    <!--M_*1 #input/0-->
    <span>
      true
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={"#input/0=":0,input:_.c={checked:!1}}},1:_.b},_.b["#input/0;"]=_.c.checkedChange=_._["__tests__/template.marko_0/checkedChange"](_.a),_.d),1,"__tests__/tags/checkbox.marko_0_input",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "false" => "true"
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
    />
    <!--M_*1 #input/0-->
    <span>
      false
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={"#input/0=":0,input:_.c={checked:!1}}},1:_.b},_.b["#input/0;"]=_.c.checkedChange=_._["__tests__/template.marko_0/checkedChange"](_.a),_.d),1,"__tests__/tags/checkbox.marko_0_input",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "true" => "false"
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
    />
    <!--M_*1 #input/0-->
    <span>
      true
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={"#input/0=":0,input:_.c={checked:!1}}},1:_.b},_.b["#input/0;"]=_.c.checkedChange=_._["__tests__/template.marko_0/checkedChange"](_.a),_.d),1,"__tests__/tags/checkbox.marko_0_input",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "false" => "true"
```