# Render
```html
<html>
  <head />
  <body>
    <input
      type="checkbox"
      value="0"
    />
    <!--M_*1 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="1"
    />
    <!--M_*1 #input/1-->
    <input
      type="checkbox"
      value="2"
    />
    <!--M_*1 #input/2-->
    <span>
      1
      <!--M_*1 #text/3-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": _.b = [],
          "ControlledType:#input/1": 1,
          "ControlledValue:#input/1": _.b,
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": _.b,
          checked: [1]
        }], _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_0/checkedValueChange"
          ](_.a), _.a["ControlledHandler:#input/1"] = _._[
          "__tests__/template.marko_0/checkedValueChange2"
          ](_.a), _.a["ControlledHandler:#input/2"] = _._[
          "__tests__/template.marko_0/checkedValueChange3"
          ](_.a), _.c),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
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
      type="checkbox"
      value="0"
    />
    <!--M_*1 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="1"
    />
    <!--M_*1 #input/1-->
    <input
      type="checkbox"
      value="2"
    />
    <!--M_*1 #input/2-->
    <span>
      1,0
      <!--M_*1 #text/3-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": _.b = [],
          "ControlledType:#input/1": 1,
          "ControlledValue:#input/1": _.b,
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": _.b,
          checked: [1]
        }], _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_0/checkedValueChange"
          ](_.a), _.a["ControlledHandler:#input/1"] = _._[
          "__tests__/template.marko_0/checkedValueChange2"
          ](_.a), _.a["ControlledHandler:#input/2"] = _._[
          "__tests__/template.marko_0/checkedValueChange3"
          ](_.a), _.c),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "1" => "1,0"
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
      value="0"
    />
    <!--M_*1 #input/0-->
    <input
      type="checkbox"
      value="1"
    />
    <!--M_*1 #input/1-->
    <input
      type="checkbox"
      value="2"
    />
    <!--M_*1 #input/2-->
    <span>
<<<<<<< Updated upstream
      1,0
      <!--M_*1 #text/3-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": _.b = [],
          "ControlledType:#input/1": 1,
          "ControlledValue:#input/1": _.b,
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": _.b,
          checked: [1]
        }], _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_0/checkedValueChange"
          ](_.a), _.a["ControlledHandler:#input/1"] = _._[
          "__tests__/template.marko_0/checkedValueChange2"
          ](_.a), _.a["ControlledHandler:#input/2"] = _._[
          "__tests__/template.marko_0/checkedValueChange3"
          ](_.a), _.c),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
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
      type="radio"
      value="0"
    />
    <!--M_*1 #input/0-->
    <input
      checked=""
      type="radio"
      value="1"
    />
    <!--M_*1 #input/1-->
    <input
      checked=""
      type="radio"
      value="2"
    />
    <!--M_*1 #input/2-->
    <span>
      1,0,2
=======
      0
>>>>>>> Stashed changes
      <!--M_*1 #text/3-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": _.b = [],
          "ControlledType:#input/1": 1,
          "ControlledValue:#input/1": _.b,
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": _.b,
          checked: [1]
        }], _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_0/checkedValueChange"
          ](_.a), _.a["ControlledHandler:#input/1"] = _._[
          "__tests__/template.marko_0/checkedValueChange2"
          ](_.a), _.a["ControlledHandler:#input/2"] = _._[
          "__tests__/template.marko_0/checkedValueChange3"
          ](_.a), _.c),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "1,0" => "0"
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
      value="0"
    />
    <!--M_*1 #input/0-->
    <input
      type="checkbox"
      value="1"
    />
    <!--M_*1 #input/1-->
    <input
      checked=""
      type="checkbox"
      value="2"
    />
    <!--M_*1 #input/2-->
    <span>
      0,2
      <!--M_*1 #text/3-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": _.b = [],
          "ControlledType:#input/1": 1,
          "ControlledValue:#input/1": _.b,
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": _.b
        }], _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_0/checkedValueChange"
          ](_.a), _.a["ControlledHandler:#input/1"] = _._[
          "__tests__/template.marko_0/checkedValueChange2"
          ](_.a), _.a["ControlledHandler:#input/2"] = _._[
          "__tests__/template.marko_0/checkedValueChange3"
          ](_.a), _.c),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "0" => "0,2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <input
      type="checkbox"
      value="0"
    />
    <!--M_*1 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="1"
    />
    <!--M_*1 #input/1-->
    <input
      type="checkbox"
      value="2"
    />
    <!--M_*1 #input/2-->
    <span>
      1
      <!--M_*1 #text/3-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": _.b = [],
          "ControlledType:#input/1": 1,
          "ControlledValue:#input/1": _.b,
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": _.b,
          checked: [1]
        }], _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_0/checkedValueChange"
          ](_.a), _.a["ControlledHandler:#input/1"] = _._[
          "__tests__/template.marko_0/checkedValueChange2"
          ](_.a), _.a["ControlledHandler:#input/2"] = _._[
          "__tests__/template.marko_0/checkedValueChange3"
          ](_.a), _.c),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "0,2" => "1"
```