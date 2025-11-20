# Render
```html
<html>
  <head />
  <body>
    <button>
      1
      <!--M_*2 #text/1-->
      |
      <!---->
      1
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      1
      <!--M_*2 #text/4-->
      |
      <!---->
      1
      <!--M_*2 #text/5-->
    </button>
    <!--M_*2 #button/3-->
    source=
    <!---->
    1
    <!--M_*1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
            "#childScope/0": _.a = {
              input_value: 1,
              state: 1,
              otherState: 1
            }
          }, _.a], _.a.input_valueChange = _.a["TagVariableChange:state"] = _
          .a["TagVariableChange:otherState"] = _._[
            "__tests__/template.marko_0/valueChange"
            ](_.c), _.b),
        "__tests__/tags/child.marko_0_otherState 2 __tests__/tags/child.marko_0_state 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<html>
  <head />
  <body>
    <button>
      2
      <!--M_*2 #text/1-->
      |
      <!---->
      2
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      2
      <!--M_*2 #text/4-->
      |
      <!---->
      2
      <!--M_*2 #text/5-->
    </button>
    <!--M_*2 #button/3-->
    source=
    <!---->
    2
    <!--M_*1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
            "#childScope/0": _.a = {
              input_value: 1,
              state: 1,
              otherState: 1
            }
          }, _.a], _.a.input_valueChange = _.a["TagVariableChange:state"] = _
          .a["TagVariableChange:otherState"] = _._[
            "__tests__/template.marko_0/valueChange"
            ](_.c), _.b),
        "__tests__/tags/child.marko_0_otherState 2 __tests__/tags/child.marko_0_state 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text0 "1" => "2"
UPDATE html/body/button1/#text0 "1" => "2"
UPDATE html/body/button1/#text2 "1" => "2"
UPDATE html/body/#text1 "1" => "2"
UPDATE html/body/button0/#text2 "1" => "2"
```

# Render
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<html>
  <head />
  <body>
    <button>
      3
      <!--M_*2 #text/1-->
      |
      <!---->
      3
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      3
      <!--M_*2 #text/4-->
      |
      <!---->
      3
      <!--M_*2 #text/5-->
    </button>
    <!--M_*2 #button/3-->
    source=
    <!---->
    3
    <!--M_*1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
            "#childScope/0": _.a = {
              input_value: 1,
              state: 1,
              otherState: 1
            }
          }, _.a], _.a.input_valueChange = _.a["TagVariableChange:state"] = _
          .a["TagVariableChange:otherState"] = _._[
            "__tests__/template.marko_0/valueChange"
            ](_.c), _.b),
        "__tests__/tags/child.marko_0_otherState 2 __tests__/tags/child.marko_0_state 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text0 "2" => "3"
UPDATE html/body/button1/#text0 "2" => "3"
UPDATE html/body/button1/#text2 "2" => "3"
UPDATE html/body/#text1 "2" => "3"
UPDATE html/body/button0/#text2 "2" => "3"
```

# Render
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<html>
  <head />
  <body>
    <button>
      4
      <!--M_*2 #text/1-->
      |
      <!---->
      4
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      4
      <!--M_*2 #text/4-->
      |
      <!---->
      4
      <!--M_*2 #text/5-->
    </button>
    <!--M_*2 #button/3-->
    source=
    <!---->
    4
    <!--M_*1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
            "#childScope/0": _.a = {
              input_value: 1,
              state: 1,
              otherState: 1
            }
          }, _.a], _.a.input_valueChange = _.a["TagVariableChange:state"] = _
          .a["TagVariableChange:otherState"] = _._[
            "__tests__/template.marko_0/valueChange"
            ](_.c), _.b),
        "__tests__/tags/child.marko_0_otherState 2 __tests__/tags/child.marko_0_state 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text0 "3" => "4"
UPDATE html/body/button1/#text0 "3" => "4"
UPDATE html/body/button1/#text2 "3" => "4"
UPDATE html/body/#text1 "3" => "4"
UPDATE html/body/button0/#text2 "3" => "4"
```