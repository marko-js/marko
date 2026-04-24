# Render `{"$global":{"count":0}}`

```html
<div>
  0
  <!--M_*1 #text/2-->
</div>
<div>
  1
  <!--M_*1 #text/3-->
</div>
<button>
  0,1
  <!--M_*1 #text/5-->
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/1": 3,
      a: 0,
      b: 1,
      "#childScope/0": _.a = {
        input_value: "count"
      }
    }, _.a], _.a["#TagVariableChange"] = _._[
      "__tests__/tags/let-global.marko_0/valueChange"
      ](_.a), _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_a/var"
      ](_.c), _.b),
    "__tests__/tags/let-global.marko_0_input_value 2 __tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<div>
  2
  <!--M_*1 #text/2-->
</div>
<div>
  2
  <!--M_*1 #text/3-->
</div>
<button>
  2,2
  <!--M_*1 #text/5-->
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/1": 3,
      a: 0,
      b: 1,
      "#childScope/0": _.a = {
        input_value: "count"
      }
    }, _.a], _.a["#TagVariableChange"] = _._[
      "__tests__/tags/let-global.marko_0/valueChange"
      ](_.a), _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_a/var"
      ](_.c), _.b),
    "__tests__/tags/let-global.marko_0_input_value 2 __tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div1/#text "1" => "2"
UPDATE div0/#text "0" => "2"
UPDATE button/#text "0,1" => "2,2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  2
  <!--M_*1 #text/2-->
</div>
<div>
  2
  <!--M_*1 #text/3-->
</div>
<button>
  2,2
  <!--M_*1 #text/5-->
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/1": 3,
      a: 0,
      b: 1,
      "#childScope/0": _.a = {
        input_value: "count"
      }
    }, _.a], _.a["#TagVariableChange"] = _._[
      "__tests__/tags/let-global.marko_0/valueChange"
      ](_.a), _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_a/var"
      ](_.c), _.b),
    "__tests__/tags/let-global.marko_0_input_value 2 __tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<div>
  2
  <!--M_*1 #text/2-->
</div>
<div>
  2
  <!--M_*1 #text/3-->
</div>
<button>
  2,2
  <!--M_*1 #text/5-->
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/1": 3,
      a: 0,
      b: 1,
      "#childScope/0": _.a = {
        input_value: "count"
      }
    }, _.a], _.a["#TagVariableChange"] = _._[
      "__tests__/tags/let-global.marko_0/valueChange"
      ](_.a), _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_a/var"
      ](_.c), _.b),
    "__tests__/tags/let-global.marko_0_input_value 2 __tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```
