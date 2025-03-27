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
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={"ControlledType:#input/0":0,checked:!1}],_.a["ControlledHandler:#input/0"]=_._["__tests__/template.marko_0/checkedChange"](_.a),_.b),1,"__tests__/template.marko_0"];M._.w()
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
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={"ControlledType:#input/0":0,checked:!1}],_.a["ControlledHandler:#input/0"]=_._["__tests__/template.marko_0/checkedChange"](_.a),_.b),1,"__tests__/template.marko_0"];M._.w()
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
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={"ControlledType:#input/0":0,checked:!1}],_.a["ControlledHandler:#input/0"]=_._["__tests__/template.marko_0/checkedChange"](_.a),_.b),1,"__tests__/template.marko_0"];M._.w()
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
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={"ControlledType:#input/0":0,checked:!1}],_.a["ControlledHandler:#input/0"]=_._["__tests__/template.marko_0/checkedChange"](_.a),_.b),1,"__tests__/template.marko_0"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "false" => "true"
```