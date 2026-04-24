# Render `{"value":"Hello"}`

```html
<div>
  <span>
    Hello
    <!--M_*2 #text/0-->
  </span>
  <!--M_}1 #div/0 2-->
</div>
<input
  value="Hello"
/>
<!--M_*1 #input/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/1": 2,
      value: "Hello"
    },
    {
      _: _.a
    }], _.a["ControlledHandler:#input/1"] = _._[
      "__tests__/template.marko_0/valueChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```


# Render
```js
const input = container.querySelector("input");
input.value = value;
input.dispatchEvent(new input.ownerDocument.defaultView.Event("input", {
  bubbles: true
}));
```
```html
<div />
<input
  default-value="Hello"
/>
<!--M_*1 #input/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/1": 2,
      value: "Hello"
    },
    {
      _: _.a
    }], _.a["ControlledHandler:#input/1"] = _._[
      "__tests__/template.marko_0/valueChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE span, #comment in div
```

# Render
```js
const input = container.querySelector("input");
input.value = value;
input.dispatchEvent(new input.ownerDocument.defaultView.Event("input", {
  bubbles: true
}));
```
```html
<div>
  <span>
    World
  </span>
</div>
<input
  default-value="Hello"
  value="World"
/>
<!--M_*1 #input/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/1": 2,
      value: "Hello"
    },
    {
      _: _.a
    }], _.a["ControlledHandler:#input/1"] = _._[
      "__tests__/template.marko_0/valueChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/span
UPDATE div/span/#text " " => "World"
```

# Render
```js
const input = container.querySelector("input");
input.value = value;
input.dispatchEvent(new input.ownerDocument.defaultView.Event("input", {
  bubbles: true
}));
```
```html
<div>
  <span>
    !
  </span>
</div>
<input
  default-value="Hello"
  value="!"
/>
<!--M_*1 #input/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/1": 2,
      value: "Hello"
    },
    {
      _: _.a
    }], _.a["ControlledHandler:#input/1"] = _._[
      "__tests__/template.marko_0/valueChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/span/#text "World" => "!"
```