# Render
```html
<html>
  <head />
  <body>
    <select>
      <option
        value="0"
      />
      <option
        selected=""
        value="1"
      />
      <option
        value="2"
      />
    </select>
    <!--M_*1 #select/0-->
    <span>
      1
      <!--M_*1 #text/1-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          selected: 1
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
selectIndex(container, 0);
```
```html
<html>
  <head />
  <body>
    <select>
      <option
        selected=""
        value="0"
      />
      <option
        value="1"
      />
      <option
        value="2"
      />
    </select>
    <!--M_*1 #select/0-->
    <span>
      0
      <!--M_*1 #text/1-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          selected: 1
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "1" => "0"
```

# Render
```js
selectIndex(container, 1);
```
```html
<html>
  <head />
  <body>
    <select>
      <option
        value="0"
      />
      <option
        selected=""
        value="1"
      />
      <option
        value="2"
      />
    </select>
    <!--M_*1 #select/0-->
    <span>
      1
      <!--M_*1 #text/1-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          selected: 1
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "0" => "1"
```

# Render
```js
selectIndex(container, 2);
```
```html
<html>
  <head />
  <body>
    <select>
      <option
        value="0"
      />
      <option
        value="1"
      />
      <option
        selected=""
        value="2"
      />
    </select>
    <!--M_*1 #select/0-->
    <span>
      2
      <!--M_*1 #text/1-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          selected: 1
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <select>
      <option
        value="0"
      />
      <option
        selected=""
        value="1"
      />
      <option
        value="2"
      />
    </select>
    <!--M_*1 #select/0-->
    <span>
      1
      <!--M_*1 #text/1-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          selected: 1
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "2" => "1"
```