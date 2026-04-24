# Render
```html
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
  M._.r = [_ =&gt; (_.b = [0, _.c = {
        "#childScope/0": _.a = {
          count1: 0,
          count2: 0
        }
      }, _.a], _.a.input_count1Change = _.a["TagVariableChange:count1"] = _._[
        "__tests__/template.marko_0/count1Change"
        ](_.c), _.a.input_count2Change = _.a["TagVariableChange:count2"] = _
      ._[
        "__tests__/template.marko_0/count2Change"
        ](_.c), _.b),
    "__tests__/tags/2counters.marko_0_count2 2 __tests__/tags/2counters.marko_0_count1 2"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
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
  M._.r = [_ =&gt; (_.b = [0, _.c = {
        "#childScope/0": _.a = {
          count1: 0,
          count2: 0
        }
      }, _.a], _.a.input_count1Change = _.a["TagVariableChange:count1"] = _._[
        "__tests__/template.marko_0/count1Change"
        ](_.c), _.a.input_count2Change = _.a["TagVariableChange:count2"] = _
      ._[
        "__tests__/template.marko_0/count2Change"
        ](_.c), _.b),
    "__tests__/tags/2counters.marko_0_count2 2 __tests__/tags/2counters.marko_0_count1 2"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text0 "0" => "1"
UPDATE div/#text2 "0" => "1"
UPDATE button0/#text "0" => "1"
UPDATE button1/#text "0" => "1"
```

# Render
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
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
  M._.r = [_ =&gt; (_.b = [0, _.c = {
        "#childScope/0": _.a = {
          count1: 0,
          count2: 0
        }
      }, _.a], _.a.input_count1Change = _.a["TagVariableChange:count1"] = _._[
        "__tests__/template.marko_0/count1Change"
        ](_.c), _.a.input_count2Change = _.a["TagVariableChange:count2"] = _
      ._[
        "__tests__/template.marko_0/count2Change"
        ](_.c), _.b),
    "__tests__/tags/2counters.marko_0_count2 2 __tests__/tags/2counters.marko_0_count1 2"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text0 "1" => "2"
UPDATE div/#text2 "1" => "2"
UPDATE button0/#text "1" => "2"
UPDATE button1/#text "1" => "2"
```

# Render
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
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
  M._.r = [_ =&gt; (_.b = [0, _.c = {
        "#childScope/0": _.a = {
          count1: 0,
          count2: 0
        }
      }, _.a], _.a.input_count1Change = _.a["TagVariableChange:count1"] = _._[
        "__tests__/template.marko_0/count1Change"
        ](_.c), _.a.input_count2Change = _.a["TagVariableChange:count2"] = _
      ._[
        "__tests__/template.marko_0/count2Change"
        ](_.c), _.b),
    "__tests__/tags/2counters.marko_0_count2 2 __tests__/tags/2counters.marko_0_count1 2"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text0 "2" => "3"
UPDATE div/#text2 "2" => "3"
UPDATE button0/#text "2" => "3"
UPDATE button1/#text "2" => "3"
```