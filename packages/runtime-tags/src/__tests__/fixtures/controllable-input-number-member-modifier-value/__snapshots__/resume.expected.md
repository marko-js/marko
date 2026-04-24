# Render
```html
<input
  type="number"
  value="0"
/>
<!--M_*2 #input/0-->
<span>
  0
  <!--M_*1 #text/1-->
   
  <!---->
  number
  <!--M_*1 #text/2-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#childScope/0": _.a = {
        "ControlledType:#input/0": 2
      }
    }, _.a], _.a.input_valueChange = _._[
      "__tests__/template.marko_0/valueChange"
      ](_.c), _.a["ControlledHandler:#input/0"] = _._[
      "__tests__/tags/custom-input.marko_0/valueChange"
      ](_.a), _.b),
    "__tests__/tags/custom-input.marko_0 2"
  ];
  M._.w()
</script>
```


# Render
```js
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<input
  default-value="0"
  type="number"
  value="1"
/>
<!--M_*2 #input/0-->
<span>
  1
  <!--M_*1 #text/1-->
   
  <!---->
  number
  <!--M_*1 #text/2-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#childScope/0": _.a = {
        "ControlledType:#input/0": 2
      }
    }, _.a], _.a.input_valueChange = _._[
      "__tests__/template.marko_0/valueChange"
      ](_.c), _.a["ControlledHandler:#input/0"] = _._[
      "__tests__/tags/custom-input.marko_0/valueChange"
      ](_.a), _.b),
    "__tests__/tags/custom-input.marko_0 2"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text0 "0" => "1"
```

# Render
```js
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<input
  default-value="0"
  type="number"
  value="10"
/>
<!--M_*2 #input/0-->
<span>
  10
  <!--M_*1 #text/1-->
   
  <!---->
  number
  <!--M_*1 #text/2-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#childScope/0": _.a = {
        "ControlledType:#input/0": 2
      }
    }, _.a], _.a.input_valueChange = _._[
      "__tests__/template.marko_0/valueChange"
      ](_.c), _.a["ControlledHandler:#input/0"] = _._[
      "__tests__/tags/custom-input.marko_0/valueChange"
      ](_.a), _.b),
    "__tests__/tags/custom-input.marko_0 2"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE span/#text0 "1" => "10"
```