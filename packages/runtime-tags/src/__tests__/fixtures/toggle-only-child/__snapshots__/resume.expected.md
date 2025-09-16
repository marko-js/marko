# Render `{"value":"Hello"}`

```html
<html>
  <head />
  <body>
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
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#div/0": _.b = {},
          "ControlledType:#input/1": 2,
          value: "Hello"
        }, _.b], _.b._ = _.a, _.a["ControlledHandler:#input/1"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.c),
        "__tests__/template.marko_0",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
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
<html>
  <head />
  <body>
    <div />
    <input />
    <!--M_*1 #input/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#div/0": _.b = {},
          "ControlledType:#input/1": 2,
          value: "Hello"
        }, _.b], _.b._ = _.a, _.a["ControlledHandler:#input/1"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.c),
        "__tests__/template.marko_0",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE span, #comment in html/body/div
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
<html>
  <head />
  <body>
    <div>
      <span>
        World
      </span>
    </div>
    <input
      value="World"
    />
    <!--M_*1 #input/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#div/0": _.b = {},
          "ControlledType:#input/1": 2,
          value: "Hello"
        }, _.b], _.b._ = _.a, _.a["ControlledHandler:#input/1"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.c),
        "__tests__/template.marko_0",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/span
UPDATE html/body/div/span/#text " " => "World"
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
<html>
  <head />
  <body>
    <div>
      <span>
        !
      </span>
    </div>
    <input
      value="!"
    />
    <!--M_*1 #input/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#div/0": _.b = {},
          "ControlledType:#input/1": 2,
          value: "Hello"
        }, _.b], _.b._ = _.a, _.a["ControlledHandler:#input/1"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.c),
        "__tests__/template.marko_0",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/span/#text "World" => "!"
```