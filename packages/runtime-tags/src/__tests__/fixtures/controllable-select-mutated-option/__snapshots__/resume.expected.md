# Render
```html
<html>
  <head />
  <body>
    <form>
      <select>
        <option
          selected=""
          value="1"
        >
          1
          <!--M_*2 #text/1-->
        </option>
        <!--M_*2 #option/0-->
        <option
          value="2"
        >
          2
          <!--M_*3 #text/1-->
        </option>
        <!--M_*3 #option/0-->
        <option
          value="3"
        >
          3
          <!--M_*4 #text/1-->
        </option>
        <!--M_*4 #option/0-->
        <!--M_}1 #select/0 4 3 2-->
      </select>
      <button
        type="reset"
      >
        reset
      </button>
    </form>
    <div>
      1
      <!--M_*1 #text/1-->
    </div>
    <button
      class="remove"
    >
      Remove option
    </button>
    <!--M_*1 #button/2-->
    <button
      class="add"
    >
      Add option
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          "ControlledValue:#select/0": 1,
          options: [1, 2, 3],
          value: 1
        },
        {
          "#LoopKey": 1
        },
        {
          "#LoopKey": 2
        },
        {
          "#LoopKey": 3
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0_options",
        1,
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
container.querySelector(".remove").click();
```
```html
<html>
  <head />
  <body>
    <form>
      <select>
        <!--M_*2 #option/0-->
        <option
          selected=""
          value="2"
        >
          2
          <!--M_*3 #text/1-->
        </option>
        <!--M_*3 #option/0-->
        <option
          value="3"
        >
          3
          <!--M_*4 #text/1-->
        </option>
        <!--M_*4 #option/0-->
        <!--M_}1 #select/0 4 3 2-->
      </select>
      <button
        type="reset"
      >
        reset
      </button>
    </form>
    <div>
      2
      <!--M_*1 #text/1-->
    </div>
    <button
      class="remove"
    >
      Remove option
    </button>
    <!--M_*1 #button/2-->
    <button
      class="add"
    >
      Add option
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          "ControlledValue:#select/0": 1,
          options: [1, 2, 3],
          value: 1
        },
        {
          "#LoopKey": 1
        },
        {
          "#LoopKey": 2
        },
        {
          "#LoopKey": 3
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0_options",
        1,
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
REMOVE option before html/body/form/select/#comment0
UPDATE html/body/div/#text "1" => "2"
```

# Render
```js
container.querySelector(".remove").click();
```
```html
<html>
  <head />
  <body>
    <form>
      <select>
        <!--M_*2 #option/0-->
        <!--M_*3 #option/0-->
        <option
          selected=""
          value="3"
        >
          3
          <!--M_*4 #text/1-->
        </option>
        <!--M_*4 #option/0-->
        <!--M_}1 #select/0 4 3 2-->
      </select>
      <button
        type="reset"
      >
        reset
      </button>
    </form>
    <div>
      3
      <!--M_*1 #text/1-->
    </div>
    <button
      class="remove"
    >
      Remove option
    </button>
    <!--M_*1 #button/2-->
    <button
      class="add"
    >
      Add option
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          "ControlledValue:#select/0": 1,
          options: [1, 2, 3],
          value: 1
        },
        {
          "#LoopKey": 1
        },
        {
          "#LoopKey": 2
        },
        {
          "#LoopKey": 3
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0_options",
        1,
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
REMOVE option after html/body/form/select/#comment0
UPDATE html/body/div/#text "2" => "3"
```

# Render
```js
container.querySelector(".remove").click();
```
```html
<html>
  <head />
  <body>
    <form>
      <select>
        <!--M_*2 #option/0-->
        <!--M_*3 #option/0-->
        <!--M_*4 #option/0-->
        <!--M_}1 #select/0 4 3 2-->
      </select>
      <button
        type="reset"
      >
        reset
      </button>
    </form>
    <div>
      ‍
      <!--M_*1 #text/1-->
    </div>
    <button
      class="remove"
    >
      Remove option
    </button>
    <!--M_*1 #button/2-->
    <button
      class="add"
    >
      Add option
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          "ControlledValue:#select/0": 1,
          options: [1, 2, 3],
          value: 1
        },
        {
          "#LoopKey": 1
        },
        {
          "#LoopKey": 2
        },
        {
          "#LoopKey": 3
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0_options",
        1,
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
REMOVE option after html/body/form/select/#comment1
UPDATE html/body/div/#text "3" => "‍"
```

# Render
```js
container.querySelector(".add").click();
```
```html
<html>
  <head />
  <body>
    <form>
      <select>
        <!--M_*2 #option/0-->
        <!--M_*3 #option/0-->
        <!--M_*4 #option/0-->
        <!--M_}1 #select/0 4 3 2-->
        <option
          selected=""
          value="3"
        >
          3
        </option>
      </select>
      <button
        type="reset"
      >
        reset
      </button>
    </form>
    <div>
      3
      <!--M_*1 #text/1-->
    </div>
    <button
      class="remove"
    >
      Remove option
    </button>
    <!--M_*1 #button/2-->
    <button
      class="add"
    >
      Add option
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          "ControlledValue:#select/0": 1,
          options: [1, 2, 3],
          value: 1
        },
        {
          "#LoopKey": 1
        },
        {
          "#LoopKey": 2
        },
        {
          "#LoopKey": 3
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0_options",
        1,
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
INSERT html/body/form/select/option
UPDATE html/body/div/#text "‍" => "3"
```

# Render
```js
container.querySelector(".add").click();
```
```html
<html>
  <head />
  <body>
    <form>
      <select>
        <!--M_*2 #option/0-->
        <!--M_*3 #option/0-->
        <!--M_*4 #option/0-->
        <!--M_}1 #select/0 4 3 2-->
        <option
          value="2"
        >
          2
        </option>
        <option
          selected=""
          value="3"
        >
          3
        </option>
      </select>
      <button
        type="reset"
      >
        reset
      </button>
    </form>
    <div>
      3
      <!--M_*1 #text/1-->
    </div>
    <button
      class="remove"
    >
      Remove option
    </button>
    <!--M_*1 #button/2-->
    <button
      class="add"
    >
      Add option
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          "ControlledValue:#select/0": 1,
          options: [1, 2, 3],
          value: 1
        },
        {
          "#LoopKey": 1
        },
        {
          "#LoopKey": 2
        },
        {
          "#LoopKey": 3
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0_options",
        1,
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
INSERT html/body/form/select/option0
```

# Render
```js
container.querySelector(".add").click();
```
```html
<html>
  <head />
  <body>
    <form>
      <select>
        <!--M_*2 #option/0-->
        <!--M_*3 #option/0-->
        <!--M_*4 #option/0-->
        <!--M_}1 #select/0 4 3 2-->
        <option
          value="1"
        >
          1
        </option>
        <option
          value="2"
        >
          2
        </option>
        <option
          selected=""
          value="3"
        >
          3
        </option>
      </select>
      <button
        type="reset"
      >
        reset
      </button>
    </form>
    <div>
      3
      <!--M_*1 #text/1-->
    </div>
    <button
      class="remove"
    >
      Remove option
    </button>
    <!--M_*1 #button/2-->
    <button
      class="add"
    >
      Add option
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#select/0": 3,
          "ControlledValue:#select/0": 1,
          options: [1, 2, 3],
          value: 1
        },
        {
          "#LoopKey": 1
        },
        {
          "#LoopKey": 2
        },
        {
          "#LoopKey": 3
        }], _.a["ControlledHandler:#select/0"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0_options",
        1,
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
INSERT html/body/form/select/option0
```