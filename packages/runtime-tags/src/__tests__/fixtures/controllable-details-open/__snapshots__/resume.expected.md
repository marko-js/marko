# Render
```html
<html>
  <head />
  <body>
    <details>
      <summary />
    </details>
    <!--M_*1 #details/0-->
    <span>
      false
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#details/0": 4
        }], _.a["ControlledHandler:#details/0"] = _._[
          "__tests__/template.marko_0/openChange"
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
container.querySelector("summary").click();
await new Promise(r => setTimeout(r, 0));
```
```html
<html>
  <head />
  <body>
    <details
      open=""
    >
      <summary />
    </details>
    <!--M_*1 #details/0-->
    <span>
      true
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#details/0": 4
        }], _.a["ControlledHandler:#details/0"] = _._[
          "__tests__/template.marko_0/openChange"
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
UPDATE html/body/details[open] null => ""
UPDATE html/body/details[open] "" => ""
UPDATE html/body/details[open] null => ""
UPDATE html/body/span/#text "false" => "true"
```

# Render
```js
container.querySelector("summary").click();
await new Promise(r => setTimeout(r, 0));
```
```html
<html>
  <head />
  <body>
    <details>
      <summary />
    </details>
    <!--M_*1 #details/0-->
    <span>
      false
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#details/0": 4
        }], _.a["ControlledHandler:#details/0"] = _._[
          "__tests__/template.marko_0/openChange"
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
UPDATE html/body/details[open] "" => null
UPDATE html/body/details[open] null => null
UPDATE html/body/details[open] "" => null
UPDATE html/body/span/#text "true" => "false"
```

# Render
```js
container.querySelector("summary").click();
await new Promise(r => setTimeout(r, 0));
```
```html
<html>
  <head />
  <body>
    <details
      open=""
    >
      <summary />
    </details>
    <!--M_*1 #details/0-->
    <span>
      true
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#details/0": 4
        }], _.a["ControlledHandler:#details/0"] = _._[
          "__tests__/template.marko_0/openChange"
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
UPDATE html/body/details[open] null => ""
UPDATE html/body/details[open] "" => ""
UPDATE html/body/details[open] null => ""
UPDATE html/body/span/#text "false" => "true"
```