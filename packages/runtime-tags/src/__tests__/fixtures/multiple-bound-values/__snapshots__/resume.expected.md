# Render
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      0
      <!--M_*2 #text/3-->
    </button>
    <!--M_*2 #button/2-->
    <div>
      0
      <!--M_*1 #text/1-->
       
      <!---->
      0
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
            "#childScope/0": _.b = {
              count1: 0,
              count2: 0
            }
          }, _.b], _.b.input_count1Change = _.b["TagVariableChange:count1"] =
          _._[
            "__tests__/template.marko_0/count1Change"
            ](_.a), _.b.input_count2Change = _.b["TagVariableChange:count2"] =
          _._[
            "__tests__/template.marko_0/count2Change"
            ](_.a), _.c),
        "__tests__/tags/2counters.marko_0_count2",
        2,
        "__tests__/tags/2counters.marko_0_count1",
        2
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
      1
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      1
      <!--M_*2 #text/3-->
    </button>
    <!--M_*2 #button/2-->
    <div>
      1
      <!--M_*1 #text/1-->
       
      <!---->
      1
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
            "#childScope/0": _.b = {
              count1: 0,
              count2: 0
            }
          }, _.b], _.b.input_count1Change = _.b["TagVariableChange:count1"] =
          _._[
            "__tests__/template.marko_0/count1Change"
            ](_.a), _.b.input_count2Change = _.b["TagVariableChange:count2"] =
          _._[
            "__tests__/template.marko_0/count2Change"
            ](_.a), _.c),
        "__tests__/tags/2counters.marko_0_count2",
        2,
        "__tests__/tags/2counters.marko_0_count1",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text0 "0" => "1"
UPDATE html/body/div/#text2 "0" => "1"
UPDATE html/body/button0/#text "0" => "1"
UPDATE html/body/button1/#text "0" => "1"
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
    </button>
    <!--M_*2 #button/0-->
    <button>
      2
      <!--M_*2 #text/3-->
    </button>
    <!--M_*2 #button/2-->
    <div>
      2
      <!--M_*1 #text/1-->
       
      <!---->
      2
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
            "#childScope/0": _.b = {
              count1: 0,
              count2: 0
            }
          }, _.b], _.b.input_count1Change = _.b["TagVariableChange:count1"] =
          _._[
            "__tests__/template.marko_0/count1Change"
            ](_.a), _.b.input_count2Change = _.b["TagVariableChange:count2"] =
          _._[
            "__tests__/template.marko_0/count2Change"
            ](_.a), _.c),
        "__tests__/tags/2counters.marko_0_count2",
        2,
        "__tests__/tags/2counters.marko_0_count1",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text0 "1" => "2"
UPDATE html/body/div/#text2 "1" => "2"
UPDATE html/body/button0/#text "1" => "2"
UPDATE html/body/button1/#text "1" => "2"
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
    </button>
    <!--M_*2 #button/0-->
    <button>
      3
      <!--M_*2 #text/3-->
    </button>
    <!--M_*2 #button/2-->
    <div>
      3
      <!--M_*1 #text/1-->
       
      <!---->
      3
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
            "#childScope/0": _.b = {
              count1: 0,
              count2: 0
            }
          }, _.b], _.b.input_count1Change = _.b["TagVariableChange:count1"] =
          _._[
            "__tests__/template.marko_0/count1Change"
            ](_.a), _.b.input_count2Change = _.b["TagVariableChange:count2"] =
          _._[
            "__tests__/template.marko_0/count2Change"
            ](_.a), _.c),
        "__tests__/tags/2counters.marko_0_count2",
        2,
        "__tests__/tags/2counters.marko_0_count1",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text0 "2" => "3"
UPDATE html/body/div/#text2 "2" => "3"
UPDATE html/body/button0/#text "2" => "3"
UPDATE html/body/button1/#text "2" => "3"
```